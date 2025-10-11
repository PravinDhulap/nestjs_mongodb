import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { PostType } from "./enums/post-type.enum";
import { postStatus } from "./enums/post-status.enum";
import { User } from "src/users/user.schema";
import { Tag } from "src/tags/tag.schema";

@Schema()
export class Post extends Document {
    @Prop({ type: String, required: true })
    title: string;

    @Prop({ type: String, required: true, enum: PostType, default: PostType.POST })
    postType: PostType;

    @Prop({ type: String, required: true })
    slug: string;

    @Prop({ type: String, required: true, enum: postStatus, default: postStatus.DRAFT })
    status: postStatus;

    @Prop({ type: String, required: false })
    content?: string;
    
    @Prop({ type: String, required: false })
    featuredImageUrl?: string;

    @Prop({ type: Object, required: false })
    publishOn?: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name, required: true })
    author: User;

    @Prop({
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: Tag.name
        }]
    })
    tags?: Tag[];
}

export const PostSchema = SchemaFactory.createForClass(Post);