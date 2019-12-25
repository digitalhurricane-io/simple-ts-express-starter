import { Router } from 'express';
const router = Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

router.use('/example', require('./example.route'));

module.exports = router;