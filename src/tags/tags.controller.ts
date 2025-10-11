import { Controller } from '@nestjs/common';
import { TagsService } from './providers/tags.service';

@Controller('tags')
export class TagsController {
    /**
     * Inject Tag Service
     */
    constructor(
        private readonly tagService: TagsService;
    ) {}
}
