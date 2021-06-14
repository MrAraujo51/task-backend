import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/models/task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly _taskRepository: Repository<Task>,
  ) {}

  async create(data: CreateTaskDto) {
    data.status = 'Open';
    return this._taskRepository.save(data);
  }

  findAll() {
    return this._taskRepository.find({
      where: { status: 'Open' },
    });
  }

  async findOne(id: number) {
    return await this._taskRepository.findOne(id);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const toUpdate = await this._taskRepository.findOne(id);
    const updated = Object.assign(toUpdate, updateTaskDto);

    return this._taskRepository.save(updated);
  }

  async complete(id: number) {
    console.log(id);
    const toUpdate = await this._taskRepository.findOne(id);
    toUpdate.status = 'Complete';
    return this._taskRepository.save(toUpdate);
  }

  async remove(id: number) {
    const toUpdate = await this._taskRepository.findOne(id);
    toUpdate.status = 'Deleted';
    return this._taskRepository.save(toUpdate);
  }
}
