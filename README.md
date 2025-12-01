# **AI-KYC-GHCI hackathon project — Intelligent Video-Based KYC Automation **
**Built for GHCI Hackathon 2025**

Reimagining digital onboarding with AI-powered document verification, biometric identity matching, and real-time video authentication — ensuring compliance, transparency, and scalability.

---


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

# KYC Real-time Verification — Architecture Overview

This README replaces the Mermaid diagram with a clearer, human-friendly architecture description suitable for project README consumption. It focuses on responsibilities, data flow, security and operational considerations so engineers and reviewers can quickly understand the system.

## High-level diagram

```
[WebRTC Client] --(1)--> [API Gateway / Auth]
       |                      |
       |                      +--(2a)--> [Signaling Service] ---> [TURN/STUN Relay]
       |                      |
       +--(2b)--> REST: /kyc --> [Ingestion Service] --(3)--> [Message Broker / Event Stream]
                                                           |
                                                           +--(4)--> [ML Inference Cluster]
                                                           |            - OCR
                                                           |            - Face match
                                                           |            - Liveness / anti-spoof
                                                           |
                                                           +--(5)--> [Risk Engine / Scoring]
                                                                     |
                                                                     +--(6a)--> [Decision Service] --> [Persistent Storage]
                                                                     |                       \
                                                                     |                        -> Approved/Rejected notifications
                                                                     |
                                                                     +--(6b)--> [Manual Review UI] --> [Decision Override] --> [Persistent Storage]

[Persistent Storage] = MongoDB (session/state), S3/MinIO (media), Feature Store (ML signals)
[Observability & Audit] = OpenTelemetry / Prometheus / Grafana / Immutable Logs
```

## Component responsibilities

1. WebRTC Client (browser / mobile)
   - Capture video/images.
   - Perform inline validations (file types, size, simple heuristics).
   - Authenticate using JWT/OAuth2.
   - Establish WebRTC with signaling for live sessions (ICE/SDP). Upload fallback via REST if needed.

2. API Gateway / Auth Layer
   - Validate JWT / OAuth2 tokens.
   - Rate limit and route requests (REST + WebSocket).
   - Forward SDP/ICE to signaling service.
   - Expose secure REST endpoints for KYC submissions.

3. Signaling Service & TURN/STUN
   - WebRTC session negotiation (SDP exchange).
   - Use TURN (coturn recommended) for media relay where direct P2P is not possible.
   - Emit session metadata to ingestion.

4. Ingestion Service
   - Create KYC session objects, validate payload, persist initial metadata.
   - Store references to media uploads.
   - Publish canonical KYC events to the message broker (Kafka / RabbitMQ / Redis Streams).

5. Message Broker (Event Stream)
   - Decouple ingestion from downstream processing.
   - Guarantee at-least-once processing semantics; compact topics for idempotency.
   - Support replay for reprocessing / model improvements.

6. ML Inference Cluster
   - Consume events, run inference pipelines:
     - OCR (document parsing)
     - Face detection & feature extraction
     - Face-to-document / face-to-face matching
     - Liveness and anti-spoof checks (challenge/response or video analysis)
   - Return structured signals and confidence scores.

7. Risk Engine & Decision Service
   - Aggregate ML signals, business rules & compliance checks.
   - Produce decisions: Approve / Reject / Review.
   - Provide explanation metadata for auditability.

8. Manual Review UI
   - Present evidence (media, OCR results, scores).
   - Allow reviewers to override decisions; track reviewer, timestamp, and justification.

9. Persistent Storage
   - KYC State: MongoDB (or Postgres) for sessions and state machine.
   - Media: S3 / MinIO for immutable media storage; signed URLs for viewers.
   - Feature Store: Redis/Feast for online features used in scoring or re-evaluation.

10. Observability & Audit
    - Traces: OpenTelemetry across services.
    - Metrics: Prometheus + Grafana (latency, error rates, throughput).
    - Immutable audit logs for compliance (WORM storage or append-only logs).
    - Alerting for SLA breaches, model drift, and suspicious activity.

## Data flow (simple step-by-step)

1. Client authenticates and starts a WebRTC session (or performs REST upload).
2. API Gateway validates token and forwards signaling or REST submission.
3. Ingestion service creates KYC session, stores metadata and uploads, publishes an event.
4. Event stream routes to ML processing cluster(s).
5. ML jobs emit signals & confidences back to a signals topic / feature store.
6. Risk engine aggregates signals, applies rules, and emits a decision payload.
7. Decisions are persisted and notifications are sent to client / downstream systems.
8. Cases flagged for manual review are routed to reviewers who can override and persist final state.
9. Telemetry and immutable logs capture the full trail for compliance.

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
