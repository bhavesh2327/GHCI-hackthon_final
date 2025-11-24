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

**flowchart LR**
┌──────────────────────────────────────────────────────────────┐
│                        User → WebRTC Client                 │
└──────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
───────────────────────────────────────────────────────────────────
**Step 1 — API Gateway**
Acts as the entry point for authentication, routing, throttling,  
and secure communication with backend microservices.
───────────────────────────────────────────────────────────────────
                                 │
                                 ▼
───────────────────────────────────────────────────────────────────
**Step 2 — ML Services**
Handles:
  • Face Recognition  
  • Liveness Detection  
  • Speech-to-Text  
  • OCR Document Parsing  
These services are containerized and scale horizontally based on load.
───────────────────────────────────────────────────────────────────
                                 │
                                 ▼
───────────────────────────────────────────────────────────────────
**Step 3 — Risk Engine**
Aggregates ML outputs, identity checks, user metadata, and anomaly scoring  
to assign a dynamic Trust/Risk level.
───────────────────────────────────────────────────────────────────
                                 │
                                 ▼
───────────────────────────────────────────────────────────────────
**Step 4 — Decision System**
Final evaluation logic deciding:
  ✔ Auto Approval  
  ✔ Rejection  
  ✔ Escalation to Review  
───────────────────────────────────────────────────────────────────
                                 │
                                 ├─────────────► Manual Review & Compliance Team
                                 │                   (Escalation Path)
                                 │
                                 ▼
───────────────────────────────────────────────────────────────────
**Step 5 — Audit & Monitoring Dashboards**
Centralized UI providing:
  • Case history  
  • System logs  
  • Risk scoring timeline  
  • Regulatory audit compliance  
───────────────────────────────────────────────────────────────────


🧰 **Key Design Principles**
- Microservice-based modular architecture  
- Event-driven communication using message queues  
- Auto-scalable ML inference workloads  

-

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


## 🚀 Future Enhancements  

- 🧓 Guided onboarding for senior citizens  
- 🌍 Support for global govt IDs  
- 🤖 Continuous ML model retraining  
- 📱 Mobile SDK + offline verification  
