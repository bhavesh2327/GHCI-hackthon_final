# **AI-KYC — Intelligent Video-Based KYC Automation**
**Built for GHCI Hackathon 2025**

Reimagining digital onboarding with AI-powered document verification, biometric identity matching, and real-time video authentication — ensuring compliance, transparency, and scalability.

---

## ⚡ Overview

AI-KYC is a next-generation video-based KYC system powered by:

- **Machine Learning**
- **WebRTC-based live identity capture**
- **OCR-powered document parsing**
- **Biometric face recognition + liveness detection**
- **Automated risk scoring with explainable audit logs**

---

## ⚠️ Problem

Traditional KYC systems are:

- Slow and manual  
- Error-prone  
- Expensive at scale  
- Hard for elderly / non-technical users

There’s a need for a smart, automated, accessible, multilingual verification system that reduces friction while preventing fraud.

---

## 🎯 Our Solution

**AI-KYC automates the entire verification lifecycle:**

- Conversational guided onboarding  
- OCR-based document scanning  
- Face matching + passive liveness detection  
- Read-aloud text verification (multilingual)  
- Human review escalation when confidence drops

**Outcome:** Days → Minutes

---

## 🛠 Feature Matrix

| Feature                                 | Status       |
|----------------------------------------:|:------------:|
| AI-guided conversational onboarding     | ✅            |
| WebRTC Live Capture                     | ✅            |
| PAN / Aadhaar OCR Parsing               | ✅            |
| Signature Detection                     | 🧪 Prototype  |
| Passive Liveness Detection              | ✅            |
| Facial Recognition                      | ✅            |

---

## 🧩 System Architecture

flowchart LR

%% --- STEP 1: CLIENT ---
A["🧑‍💻 WebRTC Client
- Video Capture
- Inline Validation
- Consent & Session"] 

-->|\"WebRTC + JWT Auth\"| B

%% --- STEP 2: API GATEWAY ---
B["🔐 API Gateway / Auth Layer
- OAuth2/JWT
- Rate Limiting
- REST + WebSocket Routing"]

-->|\"SDP / ICE Signaling\"| C
B -->|\"KYC Submission (REST/gRPC)\"| D

%% --- STEP 3: SIGNALING / MEDIA ---
C["📡 Signaling Service
- Session Negotiation"] --> TURN

TURN["TURN/STUN Media Relay"]

%% --- STEP 4: INGEST & QUEUE ---
D["📩 Ingestion Service
- Create KYC Session
- Store Metadata
- Trigger Processing"] -->|\"Publish Event\"| E

%% --- STEP 5: EVENT STREAM ---
E["📬 Message Broker
(Kafka / RabbitMQ / Redis Streams)"] -->|\"ML Jobs\"| F

%% --- STEP 6: ML PROCESSING CLUSTER ---
F["🤖 ML Inference Cluster
- OCR (Documents)
- Face Match
- Liveness & Anti-Spoofing"] -->|\"Signals + Confidence Scores\"| G

%% --- STEP 7: RISK ENGINE ---
G["⚖️ Risk Engine
- Signal Aggregation
- Scoring Model
- Rules / Compliance Logic"] -->|\"Decision Payload\"| H

%% --- STEP 8: DECISION SYSTEM ---
H["🧠 Decision System
🟢 Approve | 🔴 Reject | 🟡 Review"] -->|\"Escalated Cases\"| I
H -->|\"Approved / Rejected\"| J

%% --- STEP 9: HUMAN REVIEW UI ---
I["🧑‍🏫 Manual Review Dashboard
- Evidence Viewer
- Reviewer Actions"] -->|\"Override Decision\"| J

%% --- FINAL STORAGE ---
J["🗂 Persistent Storage
- MongoDB (KYC State)
- S3/MinIO (Media)
- Feature Store (ML Signals)"] --> K

%% --- STEP 11: AUDIT & MONITORING ---
K["📊 Compliance, Telemetry & Audit
- OpenTelemetry
- Prometheus/Grafana
- Immutable Logs"]
```

Textual numbered steps (matching the flowchart above):

1. **Client (WebRTC)** — Live capture from user's device, inline validation, consent and session creation.  
2. **API Gateway / Auth Layer** — OAuth2/JWT, rate limiting, routing (REST + WebSocket), handles SDP/ICE signaling handoffs.  
3. **Signaling / Media Relay** — Session negotiation and TURN/STUN media relays for reliable media transport.  
4. **Ingestion Service** — Create KYC session, persist metadata, and publish events to processing pipelines.  
5. **Message Broker / Event Stream** — Kafka / RabbitMQ / Redis Streams to queue ML jobs and coordinate async workflows.  
6. **ML Inference Cluster** — OCR, face matching, liveness & anti-spoofing; returns signals and confidence scores.  
7. **Risk Engine** — Aggregates ML signals, applies scoring model and compliance rules to produce a decision payload.  
8. **Decision System** — Auto-Approve, Reject, or mark for Human Review (escalation).  
9. **Human Review Dashboard** — Evidence viewer and reviewer actions for escalated cases; overrides feed back into final decision.  
10. **Persistent Storage** — MongoDB for KYC state, S3/MinIO for media, feature store for ML signals.  
11. **Audit, Telemetry & Monitoring** — OpenTelemetry, Prometheus/Grafana and immutable logs for compliance and traceability.

---

## 🧰 Key Principles

- Modular microservice architecture  
- Event-driven async workflows  
- Auto-scaled ML inference workloads

---

## 🧰 Tech Stack

**Frontend**
- Next.js
- WebRTC
- TailwindCSS + Shadcn
- Crisp Assistant

**Backend**
- Node.js (Express + TypeScript)
- Python (FastAPI for ML inference)
- MongoDB
- Redis / RabbitMQ

**Machine Learning**
- OpenCV
- DeepFace / VGG-19
- Whisper + Bark
- EasyOCR / Tesseract

---

## 📂 Core Data Entities

- users  
- sessions  
- documents  
- audit_logs  
- risk_events

Includes: field-level encryption and regulatory retention support.

---

## 🔐 Security & Compliance

- AES-256 encrypted storage  
- TLS 1.3 in transit  
- RBAC + Zero-Trust model  
- Immutable audit logs  
- Explainable AI fairness metrics

---

## 📈 Benchmarks & Goals

| Metric                        | Target         |
|-------------------------------|:---------------|
| Average Verification Time     | < 5 min        |
| Automated Approvals           | ≥ 70%          |
| OCR Accuracy                  | > 98%          |
| Liveness (FAR/FRR)            | Configurable   |

---

## 🚀 Future Enhancements

- Senior-citizen guided accessibility mode  
- Expand to global ID models  
- Continual ML retraining pipeline  
- Mobile SDK + offline verification

---
