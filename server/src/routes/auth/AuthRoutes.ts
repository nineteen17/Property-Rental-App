import express from 'express';
import passport from 'passport';
import { microsoftAuthCallback, getUser, logout } from '../../controllers/auth/AuthController';

const router = express.Router();


router.get('/auth/microsoft', passport.authenticate('microsoft', { session: true }));

router.get('/auth/microsoft/callback', (req, res) => {
  console.log('req.session before microsoftAuthCallback:', req.session);
  console.log('req.sessionID before microsoftAuthCallback:', req.sessionID);
  microsoftAuthCallback(req, res).catch(error => {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  });
});

// 
router.get('/auth/user', (req, res) => {
  console.log('req.session before getUser:', req.session);
  console.log('req.sessionID before getUser:', req.sessionID);
  console.log('req.user before getUser:', req.user);
  getUser(req, res).catch(error => {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  });
});

router.post('/auth/logout', (req, res) => {
  console.log('req.session before logout:', req.session);
  console.log('req.sessionID before logout:', req.sessionID);
  console.log('req.user before logout:', req.user);
  logout(req, res).catch(error => {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  });
});

export default router;
