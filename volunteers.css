/* General Animations */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

/* Header Styles */
.header {
  position: relative;
  overflow: hidden;
}

.header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 39, 101, 0.7);
  z-index: 1;
}

.header-content {
  position: relative;
  z-index: 2;
}

/* Volunteer Cards */
.volunteers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.volunteer-card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.volunteer-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.volunteer-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #002765;
  transition: all 0.3s ease;
}

.volunteer-card:hover .volunteer-img {
  transform: scale(1.1);
  border-color: #ff6b6b;
}

.volunteer-name {
  margin: 1rem 0;
  color: #002765;
  font-size: 1.2rem;
}

.volunteer-role {
  color: #666;
  font-size: 0.9rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.volunteer-role::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 2px;
  background: #002765;
  transition: width 0.3s ease;
}

.volunteer-card:hover .volunteer-role::after {
  width: 100px;
  background: #ff6b6b;
}

/* Join Volunteer Section */
.join-volunteer {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #002765, #001845);
  color: white;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 30px;
  background: #ff6b6b;
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
}

.btn:hover {
  background: #ff8787;
  transform: scale(1.05);
}

/* Social Links Animation */
.social-icon {
  transition: all 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-5px);
  color: #ff6b6b;
}

/* Responsive Design */
@media (max-width: 768px) {
  .volunteers-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
}
