# Testing Guide for React Native Elements Test App

This document provides comprehensive guidance on testing the RNE test application using both unit tests (React Native Testing Library) and E2E tests (Maestro).

---

## Table of Contents

1. [Overview](#overview)
2. [Unit Testing with RNTL](#unit-testing-with-rntl)
3. [E2E Testing with Maestro](#e2e-testing-with-maestro)
4. [Running Tests](#running-tests)
5. [Writing New Tests](#writing-new-tests)
6. [CI/CD Integration](#cicd-integration)
7. [Troubleshooting](#troubleshooting)

---

## Overview

### Testing Strategy

| Test Type      | Tool                                | Purpose                                  | Speed     |
| -------------- | ----------------------------------- | ---------------------------------------- | --------- |
| Unit/Component | React Native Testing Library + Jest | Test component behavior, props, events   | ⚡ Fast   |
| E2E            | Maestro                             | Test real user flows on device/simulator | 🐢 Slower |

### Recommended Coverage

- **Unit Tests (60%)**: Component props, event handlers, state changes
- **E2E Tests (40%)**: Navigation flows, modal interactions, platform-specific behavior

---

## Unit Testing with RNTL

### Setup

Dependencies are already configured in `package.json`:

```bash
npm install
```

### Configuration Files

- `jest.config.js` - Jest configuration
- `jest.setup.js` - Test setup and mocks

### Running Unit Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (development)
npm run test:watch

# Run with coverage report
npm run test:coverage
```

### Test Structure

Tests are located in `__tests__/components/`:

```
__tests__/
├── components/
│   ├── Button.test.tsx
│   ├── CheckBox.test.tsx
│   └── Input.test.tsx
```

### Example Unit Test

```tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "@rneui/themed";

describe("Button Component", () => {
  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Click Me" onPress={onPressMock} />,
    );

    fireEvent.press(getByText("Click Me"));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
```

### Common RNTL Queries

| Query                  | Use Case                                      |
| ---------------------- | --------------------------------------------- |
| `getByText`            | Find element by visible text                  |
| `getByPlaceholderText` | Find input by placeholder                     |
| `getByTestId`          | Find element by `testID` prop                 |
| `queryByText`          | Check if element exists (returns null if not) |

### Common RNTL Events

| Event                                 | Use Case           |
| ------------------------------------- | ------------------ |
| `fireEvent.press(element)`            | Simulate press/tap |
| `fireEvent.changeText(input, 'text')` | Type into input    |
| `fireEvent.scroll(scrollView)`        | Simulate scrolling |

---

## E2E Testing with Maestro

### What is Maestro?

Maestro is a mobile UI testing framework that uses simple YAML files to define test flows. It's ideal for:

- Navigation testing
- User interaction flows
- Visual verification
- Cross-platform testing (iOS/Android)

### Installation

Install Maestro CLI (macOS/Linux):

```bash
curl -Ls "https://get.maestro.mobile.dev" | bash
```

For Windows, use WSL or see [Maestro docs](https://maestro.mobile.dev/getting-started/installing-maestro).

### Maestro Test Structure

Tests are located in `.maestro/`:

```
.maestro/
├── home.yaml                    # Home screen tests
├── button.yaml                  # Button component tests
├── checkbox.yaml                # CheckBox component tests
├── dialog.yaml                  # Dialog component tests
├── full-component-flow.yaml     # Full navigation flow
└── test-component-navigation.yaml  # Reusable navigation helper
```

### Running Maestro Tests

```bash
# Start the app first (in a separate terminal)
npm start

# Run a single test
maestro test .maestro/home.yaml

# Run all tests in folder
maestro test .maestro/

# Run with specific device
maestro test --device "iPhone 15" .maestro/home.yaml

# Record a test flow interactively
maestro studio
```

### Example Maestro Test

```yaml
appId: com.rnetestapp
---
# Button Component E2E Tests
- launchApp

# Navigate to Button demo
- tapOn: "Button"

# Verify Button screen loaded
- assertVisible: "Button"

# Test button interactions
- tapOn: "Solid"
- tapOn: "Outline"

# Take screenshot
- takeScreenshot: button_demo
```

### Common Maestro Commands

| Command                 | Description               |
| ----------------------- | ------------------------- |
| `launchApp`             | Launch the app            |
| `tapOn: "text"`         | Tap element by text       |
| `assertVisible: "text"` | Assert text is visible    |
| `scroll`                | Scroll in direction       |
| `inputText: "text"`     | Type text                 |
| `takeScreenshot: name`  | Capture screenshot        |
| `back`                  | Press back button         |
| `runFlow: ./file.yaml`  | Include another test file |

---

## Running Tests

### Quick Reference

| Command                  | Description                  |
| ------------------------ | ---------------------------- |
| `npm test`               | Run all unit tests           |
| `npm run test:watch`     | Run unit tests in watch mode |
| `npm run test:coverage`  | Run unit tests with coverage |
| `maestro test .maestro/` | Run all E2E tests            |
| `maestro studio`         | Interactive test recorder    |

### Before a Release

1. **Run unit tests:**

   ```bash
   npm test
   ```

2. **Build and install the app on device/simulator**

3. **Run E2E tests:**

   ```bash
   maestro test .maestro/
   ```

4. **Review screenshots** in test output

---

## Writing New Tests

### Unit Test Template

```tsx
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ComponentName } from "@rneui/themed";

describe("ComponentName", () => {
  it("renders correctly", () => {
    const { getByText } = render(<ComponentName title="Test" />);
    expect(getByText("Test")).toBeTruthy();
  });

  it("handles user interaction", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ComponentName title="Test" onPress={onPressMock} />,
    );

    fireEvent.press(getByText("Test"));
    expect(onPressMock).toHaveBeenCalled();
  });

  it("respects disabled state", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <ComponentName title="Test" onPress={onPressMock} disabled />,
    );

    fireEvent.press(getByText("Test"));
    expect(onPressMock).not.toHaveBeenCalled();
  });
});
```

### Maestro Test Template

```yaml
appId: com.rnetestapp
---
# ComponentName E2E Tests
- launchApp

# Navigate to component
- scroll:
    direction: DOWN
- tapOn: "ComponentName"

# Verify screen loaded
- assertVisible: "ComponentName"

# Test interactions
- tapOn: "Example Button"

# Verify result
- assertVisible: "Expected Text"

# Screenshot
- takeScreenshot: componentname_demo

# Navigate back
- back
```

---

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Tests

on: [push, pull_request]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm ci
      - run: npm test

  e2e-tests:
    runs-on: macos-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: "18"
      - run: npm ci
      - run: |
          curl -Ls "https://get.maestro.mobile.dev" | bash
          export PATH="$PATH:$HOME/.maestro/bin"
      - run: |
          npx expo run:ios --no-bundler &
          sleep 120
          maestro test .maestro/
```

---

## Troubleshooting

### Unit Tests

**Issue: "Cannot find module '@rneui/themed'"**

```bash
npm install
```

**Issue: "describe is not defined"**

- Ensure `@types/jest` is installed
- Check `jest.config.js` is properly configured

**Issue: Mocking issues with reanimated**

- Check `jest.setup.js` has proper mocks

### Maestro Tests

**Issue: "App not found"**

- Ensure app is installed on device/simulator
- Check `appId` matches your app's bundle ID

**Issue: "Element not found"**

- Use `maestro studio` to inspect the app
- Check text matches exactly (case-sensitive)
- Try adding wait time before assertion

**Issue: Tests are flaky**

- Add explicit waits: `extendedWaitUntil`
- Increase timeout values
- Ensure animations complete before assertions

---

## Component Test Coverage

Use the checklist in `COMPONENT_PLAN.md` to track which components have been tested after each release.

### Priority Components to Test

1. **High Priority** (interactive):
   - Button, CheckBox, Input, Switch, Slider
   - Dialog, BottomSheet, Overlay
   - Tab, SpeedDial

2. **Medium Priority** (visual):
   - Card, Avatar, Badge, Chip
   - ListItem, Header, FAB
   - LinearProgress, Skeleton

3. **Lower Priority** (static):
   - Text, Icon, Divider, Image
   - Tile, Tooltip, SocialIcon
