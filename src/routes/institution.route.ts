import { Router } from "express"; 
import institutionController from '../controllers/institution.controller'


const router = Router();

router.get('/', institutionController.getAll);
router.get('/:name', institutionController.getInstitution);
router.post('/add',institutionController.addInstitution);
router.delete('/remove/:name', institutionController.removeInstitution);

export default router;