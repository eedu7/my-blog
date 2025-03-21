from typing import List

from fastapi import FastAPI, Request
from fastapi.middleware import Middleware
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from api import router
from core.config import config
from core.exceptions import CustomException
from core.fastapi.middlewares import (
    AuthBackend,
    AuthenticationMiddleware,
    ResponseLoggerMiddleware,
    SQLAlchemyMiddleware,
)


def on_auth_error(request: Request, exc: Exception):
    status_code, error_code, message = 401, None, str(exc)
    if isinstance(exc, CustomException):
        status_code = int(exc.code)
        error_code = exc.error_code
        message = exc.message

    return JSONResponse(
        status_code=status_code,
        content={"error_code": error_code, "message": message},
    )


async def exception_handler(request: Request, exc: Exception | CustomException):
    try:
        return JSONResponse(
            status_code=exc.code,
            content={"error_code": exc.error_code, "message": exc.message or str(exc)},
        )
    except Exception:
        return JSONResponse(
            status_code=400, content={"error_code": 400, "message": str(exc)}
        )


def init_routers(app_: FastAPI) -> None:
    app_.include_router(router)


def init_listeners(app_: FastAPI) -> None:
    app_.add_exception_handler(Exception, exception_handler)


def make_middleware() -> List[Middleware]:
    middleware = [
        Middleware(
            CORSMiddleware,
            allow_origins=["*"],
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        ),
        Middleware(
            AuthenticationMiddleware, backend=AuthBackend(), on_error=on_auth_error
        ),
        Middleware(SQLAlchemyMiddleware),
        Middleware(ResponseLoggerMiddleware),
    ]
    return middleware


def create_app() -> None:
    app_ = FastAPI(
        title="My Blog",
        description='API\'s for "MyBlog" project',
        version="1.0.0",
        docs_url=None if config.ENVIRONMENT == "production" else "/docs",
        redoc_url=None if config.ENVIRONMENT == "production" else "/redoc",
        middleware=make_middleware(),
    )
    init_listeners(app_=app_)
    init_routers(app_=app_)
    return app_


app = create_app()
