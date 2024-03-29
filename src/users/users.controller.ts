import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoggingInterceptor } from '../logging/logging.interceptor';
import { TimeoutInterceptor } from '../timeout/timeout.interceptor';
import { User } from './entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './user.decorator';

@UseInterceptors(LoggingInterceptor, TimeoutInterceptor)
@UseGuards(AuthGuard())
@Controller({ version: '1', path: 'users' })
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // @Post()
  // @HttpCode(201)
  // @Header('Cache-Control', 'none')
  // create(@Body(new ValidationPipe()) createUserDto: CreateUserDto): Promise<void> {
  //   this.usersService.create(createUserDto);
  // }

  // @Get()
  // findAll(): Promise<User[]> {
  //   return this.usersService.findAll();
  // }

  @Get()
  findUser(@GetUser() user: User) {
    // console.log(user);
    return user;
  }

  // @Get('test-decorator')
  // findUser(@GetUserEmail('email') email: string) {
  //   // console.log(user);
  //   return email;
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string): Promise<User> {
  //   try {
  //     return this.usersService.findOne(+id);
  //   }
  //   catch (err) {
  //     throw new NotFoundException(`User with id:${id} not found.`);
  //   }
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body(new ValidationPipe()) updateUserDto: UpdateUserDto): Promise<string> {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<string> {
  //   return this.usersService.remove(+id);
  // }
}
