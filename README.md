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

[WebRTC Client]
     │   (1) Signaling (WebSocket / HTTP)
     │
     ▼
[API Gateway / Auth]  ←─ JWT/OAuth2
     │
     ├─► [Signaling Service]  (handles SDP/ICE)  ── RTP/Media → TURN/STUN
     │
     └─► [REST/gRPC Proxy] ─► [Event Bus / Message Broker (Kafka/RabbitMQ)]
                           ├─► [ML Inference Cluster] ─► [Risk Engine] ─► [Decision System]
                           │         │                        │
                           │         └─► Model Metrics & Telemetry  ─┐
                           │                                             ▼
                           └─► [Feature Store / DB]                     [Escalation Service]
                                                                     └► [Audit Dashboard / UI]
     

flowchart LR

%% ===== CLIENT ZONE =====
subgraph Client["🧑‍💻 Client (Browser / Mobile App)"]
    C1["WebRTC Video Capture"]
    C2["Local Validation (Quality, Size, Format)"]
    C3["Session & Upload Handler"]
end

%% ===== API / GATEWAY =====
subgraph Gateway["🔐 API Gateway / Auth"]
    G1["JWT Auth + Rate Limiting"]
    G2["Request Routing (REST/gRPC/WebSocket)"]
end

%% ===== INGESTION & QUEUE =====
subgraph Ingestion["📩 Ingestion + Session Service"]
    I1["Session Creation"]
    I2["Evidence Metadata Store"]
    I3["Job Enqueue → Queue"]
end

subgraph Queue["📬 Message Queue"]
    Q1["Redis Streams / RabbitMQ / Kafka"]
end

%% ===== STORAGE =====
subgraph Storage["🗂 Storage Layer"]
    S1["Object Storage (S3/MinIO)"]
    S2["MongoDB (Sessions, Evidence Records)"]
    S3["Feature Store (Optional)"]
end

%% ===== ML PROCESSING =====
subgraph ML["🧠 ML Processing Services"]
    M1["OCR & Document Parsing"]
    M2["Face Recognition + Embeddings"]
    M3["Liveness Detection"]
end

%% ===== RISK ENGINE =====
subgraph Risk["⚖️ Risk Engine & Rules"]
    R1["Signal Aggregation"]
    R2["Scoring Model"]
    R3["Decision Logic: Approve | Reject | Manual Review"]
end

%% ===== HUMAN REVIEW =====
subgraph Review["🧑‍🏫 Human Review UI"]
    H1["Case Viewer"]
    H2["Override Decision"]
    H3["Feedback Loop for Model Training"]
end

%% ===== OBSERVABILITY =====
subgraph Observability["📊 Logging, Monitoring & Compliance"]
    O1["Audit Logs"]
    O2["Metrics (Prometheus/Grafana)"]
    O3["Tracing (OpenTelemetry)"]
end



%% ===== FLOWS =====

C1 --> C2 --> C3 --> G1 --> G2 --> I1 --> I2 --> I3 --> Q1
Q1 --> M1
Q1 --> M2
Q1 --> M3

M1 --> R1
M2 --> R1
M3 --> R1

R1 --> R2 --> R3

R3 -->|Auto Approve/Reject| S2
R3 -->|Manual Review Needed| H1

H2 --> S2
H2 --> O1

I2 --> S2
C3 --> S1
M1 --> S3
M2 --> S3
M3 --> S3

O1 --> O2 --> O3



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
