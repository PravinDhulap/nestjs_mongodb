import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Tag extends Document{
    @Prop({type:String ,required: true})
    name: string;

    @Prop({
        type: String,
        required: true
    })
    slug: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);