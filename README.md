🔐 AI-KYC — Intelligent Video-Based KYC Automation built for GHCI hackathon 

Reimagining customer onboarding with AI-powered document verification, video identity validation, and automated compliance workflows.

🌟 Overview

AI-KYC is a next-generation Video-Based KYC platform that simplifies and accelerates identity verification using:

🧠 Machine Learning

🎥 Real-time WebRTC video capture

🔍 OCR-based document extraction

👤 Biometric face recognition & liveness detection

📊 Automated risk scoring with audit trails

The system delivers a fast, transparent, and compliant KYC experience for both users and financial institutions.

🚩 Problem Statement

Traditional KYC workflows are:

Slow and manual

Prone to data entry errors

Expensive to operate at scale

Difficult for senior citizens and non-technical users

There is a need for a solution that is automated, intuitive, compliant, and accessible across languages and demographics.

🎯 Proposed Solution

AI-KYC streamlines the verification process through:

🤖 AI-driven conversational onboarding

🧾 Automatic document detection, OCR, and field extraction

🧬 Face matching + liveness detection

🗣 Read-aloud confirmation and multilingual support

👨‍💻 Human review mode for escalations

Users complete verification effortlessly, while compliance teams gain full traceability, decision logs, and fraud-prevention intelligence.

🛠️ Features
Feature	Status
AI-based conversational flow	✅
WebRTC Video Capture	✅
PAN/Aadhaar OCR & Validation	✅
Signature Detection	🧪 Prototype
Liveness Detection	✅
Facial Recognition	✅
Multi-language & Voice Support	🚧 In Progress
Human Escalation & Audit Dashboard	🚧
🧱 Architecture Snapshot
User → WebRTC Interface → Backend API Gateway → ML Pipelines → Risk Engine → Decision Response
                         |                              |
                    Storage Layer                 Human Review System


Modular microservice design

Event-driven workflows

Scalable inference processing

📦 Tech Stack
Frontend

Next.js

WebRTC

TailwindCSS + ShadcnUI

Crisp Support

Backend

Node.js (Express, TypeScript)

Python (Flask/FastAPI ML Services)

MongoDB

Redis / RabbitMQ

Machine Learning & CV

OpenCV

Tesseract / EasyOCR

DeepFace / VGG-19

Whisper & Bark AI (speech)

📂 Core Data Models

users

sessions

documents

auditLogs

riskEvents

Includes field-level encryption and compliance retention.

🔐 Security & Compliance

AES-256 encryption at rest

TLS 1.3 in transit

RBAC & least privilege

Immutable audit logs

Bias-aware ML and explainable scoring

📈 KPIs & Performance Targets
Metric	Goal
Avg onboarding time	< 5 min
Automated approval rate	≥ 70%
OCR accuracy	> 98%
Liveness false acceptance rate	Configurable
▶️ Demo & Resources


🚀 Future Enhancements

Dedicated senior-citizen guided mode

Support for global ID formats

Continuous model retraining pipeline
