# Components Library

This directory contains all reusable UI components built with Chakra UI.

## Available Components

### Card
A flexible container component with consistent styling.

```tsx
import { Card } from '@/components/Card';

<Card hover>
  <Text>Content goes here</Text>
</Card>
```

**Props:**
- `hover` (boolean): Adds hover effect with elevation
- All Chakra `BoxProps` are supported

---

### StatCard
A card component designed for displaying key metrics/statistics.

```tsx
import { StatCard } from '@/components/StatCard';
import { Icon } from '@chakra-ui/react';

<StatCard
  label="Habit Streak"
  value="12 Days"
  icon={<Icon />}
  iconColor="orange.500"
/>
```

**Props:**
- `label` (string): The metric label
- `value` (string): The metric value
- `icon` (ReactNode): Icon to display
- `iconColor` (string): Chakra color token for the icon

---

### Sidebar
A fixed sidebar navigation component with profile section.

```tsx
import { Sidebar } from '@/components/Sidebar';
import { CalendarIcon } from '@chakra-ui/icons';

<Sidebar>
  <Sidebar.NavItem icon={CalendarIcon} label="Dashboard" isActive />
  <Sidebar.NavItem icon={SettingsIcon} label="Settings" />
</Sidebar>
```

**Sidebar Props:**
- `children` (ReactNode): Navigation items

**NavItem Props:**
- `icon` (ComponentType): Chakra icon or custom icon component
- `label` (string): Navigation item label
- `isActive` (boolean): Highlights the active nav item
- `onClick` (function): Click handler

---

### Layout
A wrapper component that provides proper spacing for sidebar layout.

```tsx
import { Layout } from '@/components/Layout';

<Layout>
  <YourContent />
</Layout>
```

---

### Header
Page header with greeting and action button.

```tsx
import { Header } from '@/components/Header';

<Header 
  userName="Alex" 
  date="Wednesday, December 31, 2025" 
/>
```

**Props:**
- `userName` (string): User's name for greeting
- `date` (string): Optional custom date string

---

### SectionHeader
A section title with optional action button.

```tsx
import { SectionHeader } from '@/components/SectionHeader';
import { CalendarIcon } from '@chakra-ui/icons';

<SectionHeader
  icon={CalendarIcon}
  title="Daily Schedule"
  iconColor="blue.500"
  action={{
    label: 'View All',
    onClick: () => console.log('clicked')
  }}
/>
```

**Props:**
- `icon` (ComponentType): Icon component
- `title` (string): Section title
- `iconColor` (string): Chakra color token
- `action` (object): Optional action button config
  - `label` (string): Button text
  - `onClick` (function): Button click handler

---

### ScheduleItem
A list item component for schedule entries.

```tsx
import { ScheduleItem } from '@/components/ScheduleItem';

<ScheduleItem
  time="08:00 AM"
  title="Morning Routine"
  category="HEALTH"
  categoryColor="green.500"
  onClick={() => console.log('clicked')}
/>
```

**Props:**
- `time` (string): Time of the event
- `title` (string): Event title
- `category` (string): Category label
- `categoryColor` (string): Chakra color token for category
- `onClick` (function): Click handler

---

### HabitItem
A checkbox item for habit tracking.

```tsx
import { HabitItem } from '@/components/HabitItem';

<HabitItem
  label="Meditate (10m)"
  isCompleted={true}
  onChange={(checked) => console.log(checked)}
/>
```

**Props:**
- `label` (string): Habit description
- `isCompleted` (boolean): Whether habit is completed
- `isDisabled` (boolean): Disable interaction
- `onChange` (function): Checkbox change handler

---

## Usage Patterns

### Creating a Dashboard Card

```tsx
import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import { VStack } from '@chakra-ui/react';

<Card>
  <SectionHeader
    icon={SomeIcon}
    title="My Section"
    iconColor="blue.500"
  />
  <VStack spacing={4}>
    {/* Your content */}
  </VStack>
</Card>
```

### Building a List with Items

```tsx
import { VStack, Divider } from '@chakra-ui/react';
import { ScheduleItem } from '@/components/ScheduleItem';

<VStack spacing={0} divider={<Divider />}>
  <ScheduleItem {...props1} />
  <ScheduleItem {...props2} />
  <ScheduleItem {...props3} />
</VStack>
```

## Styling

All components use the custom theme located in `/src/config/theme.ts`. You can customize:
- Brand colors
- Component variants
- Global styles
- Shadows and spacing

## Best Practices

1. **Composition**: Combine small components to build complex UIs
2. **Props**: Always use TypeScript props for type safety
3. **Theming**: Use Chakra color tokens instead of hard-coded colors
4. **Accessibility**: Components include ARIA labels and keyboard support
5. **Responsive**: Use Chakra's responsive props when needed

## Adding New Components

When adding a new component:

1. Create a folder: `ComponentName/`
2. Create the component: `ComponentName.tsx`
3. Create the export: `index.tsx`
4. Export from index: `export { ComponentName } from './ComponentName';`
5. Add tests: `ComponentName.test.tsx`
6. Document in this README

## Examples

See `/src/pages/HomePage/index.tsx` for a complete example of all components working together.
