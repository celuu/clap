# Project Architecture Guide

## Overview

This document outlines the organization and best practices for the Clap project.

## Directory Structure

### `/src/assets/`
Static files like images, SVGs, fonts, and other media files.

**Example:**
```
assets/
├── images/
├── icons/
└── fonts/
```

### `/src/components/`
Reusable UI components that can be used across different pages and features.

**Guidelines:**
- Each component should have its own folder
- Include tests alongside components
- Keep components small and focused on a single responsibility
- Use TypeScript for type safety

**Example:**
```
components/
└── Button/
    ├── index.tsx          # Export file
    ├── Button.tsx         # Component implementation
    └── Button.test.tsx    # Component tests
```

### `/src/config/`
Configuration files and initialization code.

**Contains:**
- API client configurations (Supabase, etc.)
- App-wide settings
- Third-party service initializations

### `/src/constants/`
Application-wide constants and enums.

**Examples:**
- API endpoints
- Route paths
- Status codes
- Configuration values

### `/src/features/`
Feature-based modules for complex features that span multiple concerns.

**Structure:**
```
features/
└── auth/
    ├── components/      # Feature-specific components
    ├── hooks/          # Feature-specific hooks
    ├── services/       # Feature-specific services
    └── types/          # Feature-specific types
```

**When to use:**
- Complex features with multiple related components
- Features that require their own business logic
- When organizing by feature makes more sense than by type

### `/src/hooks/`
Custom React hooks for shared logic.

**Guidelines:**
- Name hooks with `use` prefix
- Keep hooks focused and reusable
- Document hook parameters and return values

**Example:**
```typescript
export const useAuth = () => {
  const [user, setUser] = useState(null);
  // Hook logic
  return { user, login, logout };
};
```

### `/src/pages/`
Page-level components that represent routes/screens.

**Guidelines:**
- One folder per page
- Can contain page-specific components
- Should compose reusable components from `/components/`

### `/src/services/`
API service layers and external service integrations.

**Guidelines:**
- Organize by domain (userService, productService, etc.)
- Handle API calls and data transformation
- Return typed responses

**Example:**
```typescript
// userService.ts
import { supabase } from '@/config';

export const userService = {
  async getUser(id: string) {
    const { data, error } = await supabase
      .from('users')
      .select()
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  }
};
```

### `/src/styles/`
Global styles, CSS files, and theme configurations.

**Contains:**
- Global CSS
- CSS modules
- Theme configurations
- Style utilities

### `/src/types/`
TypeScript type definitions and interfaces.

**Guidelines:**
- Define shared types here
- Use descriptive names
- Export from index.ts for easy imports

### `/src/utils/`
Utility functions and helper methods.

**Guidelines:**
- Pure functions when possible
- Well-documented with JSDoc comments
- Unit tested

## Best Practices

### Importing
Use absolute imports from `src/` for better maintainability:

```typescript
// Good
import { Button } from '@/components/Button';
import { useAuth } from '@/hooks/useAuth';

// Avoid
import { Button } from '../../components/Button';
```

### Component Organization
1. Group related components in folders
2. Each component folder should contain:
   - Component implementation
   - Tests
   - Type definitions (if complex)

### State Management
- Use React hooks for local state
- Consider Context API for app-wide state
- For complex state, consider state management libraries

### Styling
- Use Chakra UI components when possible
- Custom styles in CSS modules or styled-components
- Keep styles co-located with components

### Testing
- Write tests for critical business logic
- Test components with user interactions
- Mock external dependencies

## File Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`, `UserProfile.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useAuth.ts`, `useLocalStorage.ts`)
- **Utils**: camelCase (e.g., `formatDate.ts`, `apiHelpers.ts`)
- **Types**: PascalCase (e.g., `User.ts`, `ApiResponse.ts`)
- **Constants**: UPPER_SNAKE_CASE in code, files can be camelCase (e.g., `API_ENDPOINTS`)

## Adding New Features

1. Determine if it's a simple component or complex feature
2. For simple components: Add to `/src/components/`
3. For complex features: Create feature folder in `/src/features/`
4. Add types in `/src/types/` or feature-specific types folder
5. Create services in `/src/services/` if API calls are needed
6. Add custom hooks in `/src/hooks/` if reusable logic is extracted

## Environment Variables

All environment variables must be prefixed with `REACT_APP_`:

```env
REACT_APP_SUPABASE_URL=https://your-project.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key
```

Access in code:
```typescript
const apiUrl = process.env.REACT_APP_SUPABASE_URL;
```

## Code Quality

- Use TypeScript strict mode
- Follow ESLint rules
- Format code with Prettier
- Write meaningful commit messages
- Review code before merging

## Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Chakra UI Documentation](https://chakra-ui.com/)
- [Supabase Documentation](https://supabase.com/docs)

