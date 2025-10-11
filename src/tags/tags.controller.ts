import { Body, Controller, Post } from '@nestjs/common';
import { TagsService } from './providers/tags.service';
import { CreateTagDto } from './dtos/create-tag.dto';

@Controller('tags')
export class TagsController {
    /**
     * Inject Tag Service
     */
    constructor(
        private readonly tagService: TagsService
    ) {}

    @Post()
    public async createTag(@Body() createTagDto: CreateTagDto){
        return await this.tagService.createTag(createTagDto);
    }
}
