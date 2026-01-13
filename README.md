# Infrastructure-Focused Application

![Docker](https://img.shields.io/badge/docker-enabled-blue) ![React](https://img.shields.io/badge/react-enabled-lightblue) ![Node.js](https://img.shields.io/badge/node.js-enabled-green) ![Nginx](https://img.shields.io/badge/nginx-enabled-orange)

## Overview

This repository contains a minimal frontend-backend application designed to support infrastructure-focused projects. The application consists of:

- **Frontend**: React application served via Nginx.
- **Backend**: Node.js application using Express.

Both components are containerized with Docker.

## Purpose

The application is intended solely for validating infrastructure behavior, including:

- Testing VPC networking
- Validating Application Load Balancers (ALBs)
- Assessing ECS Fargate deployments
- Enabling service isolation

Runtime configuration is managed through environment variables, allowing for flexible deployment scenarios. Health check endpoints are included to facilitate integration with load balancers.

## Design Principles

- **Simplicity**: The application is intentionally minimal, focusing on infrastructure validation.
- **Isolation**: Each component operates independently to ensure clear service boundaries.
- **Configurability**: Environment variables are used for runtime configuration without requiring build-time adjustments.

## What This Repository Is / Is Not

- **Is**: A minimal application for infrastructure validation.
- **Is Not**: A complete application or production-ready solution.

## Scope Boundary

This repository does not include infrastructure, CI/CD, or orchestration configurations, which are managed in a separate Terraform-based repository.
