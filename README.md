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

flowchart LR

%% --- STEP 1: CLIENT ---
A["🧑‍💻 WebRTC Client
- Video Capture
- Inline Validation
- Consent & Session"] 

-->|"WebRTC + Auth Token"| B

%% --- STEP 2: API GATEWAY ---
B["🔐 API Gateway / Auth Layer
- JWT/OAuth2
- Rate Limiting
- WebSocket + REST Routing"]

-->|"Signaling SDP/ICE"| C
B -->|"KYC Submission REST / gRPC"| D

%% --- STEP 3: SIGNALING / MEDIA ---
C["📡 Signaling Service
(Handles Session Negotiation)"] 
--> TURN

TURN["TURN/STUN Relay"]

%% --- STEP 4: INGEST & QUEUE ---
D["📩 Ingestion Service
- Create KYC Session
- Store Metadata
- Trigger Processing"]

-->|"Publish Event"| E

%% --- STEP 5: EVENT BUS ---
E["📬 Message Broker
(Kafka / RabbitMQ / Redis Streams)"]

-->|"Inference Jobs"| F

%% --- STEP 6: ML PROCESSING CLUSTER ---
F["🤖 ML Inference Cluster
- OCR (ID reading)
- Face Match
- Liveness / Anti-Spoofing"] 
-->|"Extracted Signals"| G

%% --- STEP 7: RISK ENGINE ---
G["⚖️ Risk Engine
- Aggregation
- Weighted Scoring
- Compliance Logic"]

-->|"Decision + Confidence"| H

%% --- STEP 8: DECISION SYSTEM ---
H["🧠 Decision System
🟢 Approve
🟡 Escalate (Low Confidence)
🔴 Reject"]

-->|"If Escalated"| I
H -->|"If Approved/Rejeted"| J

%% --- STEP 9: MANUAL REVIEW UI ---
I["🧑‍🏫 Manual Review Dashboard
- Evidence Viewer
- Override Actions"] 
-->|"Final Action Logged"| J

%% --- STEP 10: STORAGE / AUDIT ---
J["🗂 Final Record Storage
- MongoDB (KYC State)
- Object Storage (Media)
- Feature Store (ML Signals)"]

--> K

%% --- STEP 11: COMPLIANCE ---
K["📊 Audit & Monitoring
- OpenTelemetry
- Prometheus/Grafana
- Immutable Audit Logs"]

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


## 🚀 Future Enhancements  

- 🧓 Guided onboarding for senior citizens  
- 🌍 Support for global govt IDs  
- 🤖 Continuous ML model retraining  
- 📱 Mobile SDK + offline verification  
