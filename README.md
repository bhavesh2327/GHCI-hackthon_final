# 🔐 AI-KYC — Intelligent Video-Based KYC Automation  
### Built for **GHCI Hackathon 2025**

Reimagining digital onboarding with **AI-powered document verification**, **biometric identity matching**, and **real-time video-based authentication** — ensuring compliance, transparency, and scalability.

---

## ⚡ Overview  

**AI-KYC** is a next-generation Video-Based KYC system powered by:

- 🧠 Machine Learning  
- 🎥 WebRTC-based live video capture  
- 🔍 OCR-powered document extraction  
- 👤 Biometric face recognition + liveness check  
- 📊 Automated risk scoring and explainable audit logs  

It delivers a fast, secure, and intuitive onboarding experience tailored for financial institutions and users.

---

## 🚩 Problem  

Traditional KYC systems are:

- ⏳ Slow and manually driven  
- 🧾 Error-prone  
- 💸 Expensive to scale  
- ⚠️ Not user-friendly for elderly or non-technical applicants  

There is a need for a **smart, automated, multilingual, and accessible system** that reduces friction while preventing fraud.

---

## 🎯 Solution  

AI-KYC automates the entire KYC lifecycle using an **AI-assisted guided flow**:

- 🤖 Conversational onboarding  
- 🧾 OCR-based document scanning & extraction  
- 👤 Face match + passive liveness check  
- 🗣 Read-aloud verification with multilingual speech support  
- 👨‍💼 Human escalation workflow for edge cases  

This reduces verification time from **days → minutes**.

---

## 🛠 Features  

| Feature | Status |
|--------|--------|
| AI-based conversational flow | ✅ |
| WebRTC-Based Video Capture | ✅ |
| PAN / Aadhaar OCR & Validation | ✅ |
| Signature Detection | 🧪 Prototype |
| Liveness Detection | ✅ |
| Facial Recognition | ✅ |

## 🧱 Architecture  

User → WebRTC Client
↓
API Gateway → ML Services → Risk Engine → Decision System
|
→ Escalation + Audit Dashboard

yaml
Copy code

- Modular microservices  
- Event-driven workflows  
- Horizontally scalable ML inference  

---

## 🧰 Tech Stack  

### Frontend  
- Next.js  
- WebRTC  
- TailwindCSS + Shadcn  
- Crisp Live Assistant  

### Backend  
- Node.js (Express + TypeScript)  
- Python (FastAPI for ML inference)  
- MongoDB  
- Redis / RabbitMQ  

### Machine Learning  
- OpenCV  
- EasyOCR / Tesseract  
- DeepFace / VGG-19  
- Whisper + Bark AI

---

## 📂 Core Data Entities  

- `users`  
- `sessions`  
- `documents`  
- `auditLogs`  
- `riskEvents`  

Includes: **field-level encryption + compliance retention policies**

---

## 🔐 Security & Compliance  

- AES-256 encrypted storage  
- TLS 1.3 in transit  
- RBAC with least-privilege  
- Immutable audit logs  
- Explainable AI fairness tracking  

---

## 📈 Benchmarks / KPIs  

| Metric | Target |
|--------|--------|
| Avg KYC Completion Time | ⏱ < 5 min |
| Automated Approval Rate | ≥ 70% |
| OCR Accuracy | > 98% |
| Liveness → FAR/FRR | Configurable |

---

## ▶️ Demo & Repo  

📦 Repository:  
🔗 https://github.com/bhavesh2327/GHCI-hackthon_final  

🎥 Demo Video:  
🔗 https://drive.google.com/drive/folders/1VRZ3dsP2xdydkLj8N5Y_mITXUWjbNjiF  

---

## 🚀 Future Enhancements  

- 🧓 Guided onboarding for senior citizens  
- 🌍 Support for global govt IDs  
- 🤖 Continuous ML model retraining  
- 📱 Mobile SDK + offline verification  
