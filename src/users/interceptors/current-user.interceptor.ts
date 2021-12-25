// import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
// import { handleRetry } from "@nestjs/typeorm";
// import { request } from "http";
// import { Observable } from "rxjs";
// import { UsersService } from "../users.service";

// @Injectable()
// export class CurrentUserInterceptor implements NestInterceptor {

//     constructor(private usersService: UsersService) { }
//     async intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>> {
//         const request = context.switchToHttp().getRequest()

//         const { userId } = request.session;
//         if (userId) {
//             const user = await this.usersService.findOne(userId)
//             request.currentUser = user;
//         }

//         return next.handle()
//     }
// }