import mongoose, { Schema, Document} from 'mongoose';

const institutionSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    url: {
        type: String
    },
    responsible: {
        type: String
    },
});

export interface Iinstitution extends Document {
    name: String;
    description: String;
    url: String;
    responsible: String;
}

export default mongoose.model<Iinstitution>('institution', institutionSchema);