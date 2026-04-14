/* ============================================
   LoginModal — Minimalist text-only modal
   ============================================ */

import './LoginModal.css';

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          Close
        </button>
        
        <div className="modal-header">
          <h2 className="modal-title">Join 24/7 news</h2>
          <p className="modal-subtitle">Stay connected with the latest news</p>
        </div>

        <div className="modal-body">
          <button className="social-btn">
            Continue with Google
          </button>
          <button className="social-btn">
            Continue with Github
          </button>
          
          <div className="modal-divider">
            <span>or</span>
          </div>

          <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email address" className="modal-input" />
            <button type="submit" className="login-btn">Continue</button>
          </form>
        </div>

        <div className="modal-footer">
          By continuing, you agree to our Terms and Privacy Policy.
        </div>
      </div>
    </div>
  );
}
