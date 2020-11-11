import { LinRouter, Failed, NotFound } from 'lin-mizar';
import {
    CreateOrUpdatePostValidator,
} from '../validator/article';

import { adminRequired } from '../../middleware/jwt';
import { AdminDao } from '../../dao/admin';
