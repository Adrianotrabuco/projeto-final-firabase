# PRD - Car Registration App

## Overview

Expo Router frontend application for user authentication and car registration/listing.

## Main Features

- Login screen with email and password validation.
- Signup screen with name, email, password, and password confirmation validation.
- Home navigation after authentication.
- Car registration form for brand, model, and year.
- Car listing screen with data from Firestore.
- Firebase authentication and Firestore integration.

## Validation Rules

- Login requires email and password.
- Signup requires all fields.
- Password must have at least 8 characters and a special character.
- Password confirmation must match password.
- Car brand, model, and year are required.
- Unauthenticated users are redirected to the login screen.

## Target Platform

Frontend web build served by Expo Web at `http://localhost:19006/`.
