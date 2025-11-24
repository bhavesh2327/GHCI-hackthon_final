🔐 AI-KYC — Intelligent Video-Based KYC Automation
Built for GHCI Hackathon 2025

Reimagining digital onboarding with AI-powered document verification, biometric identity matching, and real-time video authentication — ensuring compliance, transparency, and scalability.

⚡ Overview

AI-KYC is a next-generation video-based KYC system powered by:

🧠 Machine Learning

🎥 WebRTC-based live identity capture

🔍 OCR-powered document parsing

👤 Biometric face recognition + liveness detection

📊 Automated risk scoring with explainable audit logs

🚩 Problem

Traditional KYC systems are:

⏳ Slow and manual

🧾 Error-prone

💸 Expensive at scale

⚠️ Hard for elderly / non-technical users

There’s a need for a smart, automated, accessible, multilingual verification system that reduces friction while preventing fraud.

🎯 Our Solution

AI-KYC automates the entire verification lifecycle:

🤖 Conversational guided onboarding

🧾 OCR-based document scanning

👤 Face match + passive liveness

🗣 Read-aloud text verification ( multilingual )

👨‍💼 Human review escalation when confidence drops

⏱ Outcome: Days → Minutes

🛠 Feature Matrix
Feature	Status
AI-guided conversational onboarding	✅
WebRTC Live Capture	✅
PAN / Aadhaar OCR Parsing	✅
Signature Detection	🧪 Prototype
Passive Liveness Detection	✅
Facial Recognition	✅

🧩 System Architecture
┌──────────────────────────────────────────────────────────────┐
│                     User → WebRTC Client                     │
└──────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
───────────────────────────────────────────────────────────────────
**Step 1 — API Gateway**
Authentication, routing, throttling, and secure request handling.
───────────────────────────────────────────────────────────────────
                                 │
                                 ▼
───────────────────────────────────────────────────────────────────
**Step 2 — ML Services**
• Face Recognition  
• Liveness Detection  
• OCR Document Parsing  
• Speech-to-Text  
Horizontally scalable inference via containerized microservices.
───────────────────────────────────────────────────────────────────
                                 │
                                 ▼
───────────────────────────────────────────────────────────────────
**Step 3 — Risk Engine**
Scores user identity using ML results, metadata, and anomaly detection.
───────────────────────────────────────────────────────────────────
                                 │
                                 ▼
───────────────────────────────────────────────────────────────────
**Step 4 — Decision System**
Logic determines:  
✔ Auto-Approve | ❌ Reject | 🏷 Escalate to Human Review
───────────────────────────────────────────────────────────────────
                                 │
                                 ├─────────────► Manual Compliance Review
                                 │
                                 ▼
───────────────────────────────────────────────────────────────────
**Step 5 — Audit Dashboard**
Case history, scoring timeline, compliance logs, traceability.
───────────────────────────────────────────────────────────────────


🧰 Key Principles

Modular microservice architecture

Event-driven async workflows

Auto-scaled ML inference workloads

🧰 Tech Stack
🎨 Frontend

Next.js

WebRTC

TailwindCSS + Shadcn

Crisp Assistant

⚙️ Backend

Node.js (Express + TypeScript)

Python (FastAPI for ML inference)

MongoDB

Redis / RabbitMQ

🧠 Machine Learning

OpenCV

DeepFace / VGG-19

Whisper + Bark

EasyOCR / Tesseract

📂 Core Data Entities

users

sessions

documents

audit_logs

risk_events

Includes: field-level encryption + regulatory retention support

🔐 Security & Compliance

AES-256 encrypted storage

TLS 1.3 in-transit

RBAC + Zero-Trust model

Immutable audit logs

Explainable AI fairness metrics

📈 Benchmarks & Goals
Metric	Target
Average Verification Time	⏱ < 5 min
Automated Approvals	≥ 70%
OCR Accuracy	> 98%
Liveness (FAR/FRR)	Configurable
🚀 Future Enhancements

🧓 Senior-citizen guided accessibility mode

🌍 Expand to global ID models

🤖 Continual ML retraining pipeline

📱 Mobile SDK + offline verification
