import { Model } from 'mongoose';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../dtos/create-user.dto';
/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UsersService {

  constructor(
    /**
     * Injext User Model to perform database operations
     */
    @InjectModel(User.name)
    private readonly userModel: Model<User>,

  ) { }

  public async createUser(createUserDto: CreateUserDto) {

    let newUser = null
    try {
      newUser = new this.userModel(createUserDto);
    } catch (error) {
      throw new BadRequestException('Error creating the user');
    }
    finally {
      if (newUser) {
        console.error('User creation successful:', newUser);
        return await newUser.save();
      }
    }


  }

  /**
   * The method to get all the users from the database
   */
  public async findAll(
    getUserParamDto: GetUsersParamDto,
    limt: number,
    page: number,
  ) {
    console.log(getUserParamDto, limt, page);

    return await this.userModel.find();

    // return [
    //   {
    //     firstName: 'John',
    //     email: 'john@doe.com',
    //   },
    //   {
    //     firstName: 'Alice',
    //     email: 'alice@doe.com',
    //   },
    // ];
  }
  /**
   * Find a single user using the ID of the user
   */
  public findOneById(id: string) {
    return {
      id: 1234,
      firstName: 'Alice',
      email: 'alice@doe.com',
    };
  }
}
