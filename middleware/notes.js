import Joi from 'joi';

const addNoteSchema = Joi.object({
    title: Joi.string().required(),
    body: Joi.string().max(5000).required(),
    archived: Joi.boolean().valid(false).optional()
});

const idSchema = Joi.object({
    id: Joi.string().uuid().required(),
});

const getManyNoteSchema = Joi.object({
    filter: Joi.string().valid('archive').optional(),
});

export { addNoteSchema, idSchema, getManyNoteSchema };
