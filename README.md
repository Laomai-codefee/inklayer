# InkLayer

> **Production-grade PDF annotation infrastructure for systems**

InkLayer provides a stable annotation layer on top of PDF.js, defining annotation models, managing coordinate transforms, and providing export pipelines — so teams can build reliable PDF applications without maintaining fragile, custom logic.

📘 **Documentation & Overview**  
https://inklayer.dev

---

## What InkLayer Is

InkLayer is an infrastructure layer that sits between PDF rendering and persistence.  
It abstracts annotation complexity away from UI and backend implementations, with a focus on correctness, extensibility, and long-term maintainability.

---

## What InkLayer Is Not

InkLayer is intentionally narrow in scope.

- Not a PDF viewer  
- Not a document management system  
- Not a ready-to-use end-user product  

---

## Repository Structure

This repository serves as the **main entry point** for the InkLayer SDK and its ecosystem.

### Core Repositories

- **[pdfjs-annotation-extension](https://github.com/Laomai-codefee/pdfjs-annotation-extension)**  
  Low-level reference implementation containing core annotation logic and data models.

- **[pdfjs-annotation-extension-react](https://github.com/Laomai-codefee/pdfjs-annotation-extension-for-react)**  
  React bindings and example integrations built on top of the InkLayer core.

---

## Getting Started

InkLayer is designed to be embedded into existing systems rather than used as a standalone tool.

- Start with the architectural overview and core concepts:  
  https://inklayer.dev/docs
- For low-level control and customization, see:  
  **pdfjs-annotation-extension**
- For React-based integrations, see:  
  **pdfjs-annotation-extension-react**

---

## Status

InkLayer is under active development.

Core annotation data models and export pipelines are considered **stable for early production use**.  
APIs may evolve, but breaking changes will be **versioned and documented clearly**.
