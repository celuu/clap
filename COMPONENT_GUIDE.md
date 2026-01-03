# Component Guide - LifeOS Dashboard Template

This guide will help you understand and use the pre-built components in this template.

## 🎨 Design System

The template uses a custom Chakra UI theme with:
- **Primary Brand Color**: Purple/Blue (`brand.500`)
- **Layout**: Fixed sidebar with main content area
- **Cards**: Consistent white cards with subtle shadows
- **Typography**: System fonts for optimal performance

## 📦 Component Overview

### Layout Components

#### `<Sidebar>`
Fixed left sidebar with navigation and user profile.

```tsx
<Sidebar>
  <Sidebar.NavItem icon={CalendarIcon} label="Dashboard" isActive />
  <Sidebar.NavItem icon={SettingsIcon} label="Settings" />
</Sidebar>
```

#### `<Layout>`
Content wrapper that accounts for sidebar spacing.

```tsx
<Layout>
  <Header />
  <Container>
    {/* Your content */}
  </Container>
</Layout>
```

#### `<Header>`
Page header with greeting and action button.

```tsx
<Header userName="Alex" date="Wednesday, December 31, 2025" />
```

---

### Card Components

#### `<Card>`
Base card component for all content containers.

```tsx
// Basic card
<Card>
  <Text>Content</Text>
</Card>

// Card with hover effect
<Card hover>
  <Text>Interactive content</Text>
</Card>
```

#### `<StatCard>`
Specialized card for displaying key metrics.

```tsx
<StatCard
  label="Habit Streak"
  value="12 Days"
  icon={<FireIcon />}
  iconColor="orange.500"
/>
```

**Use Cases:**
- Dashboard metrics
- Quick stats
- KPI displays

---

### Content Components

#### `<SectionHeader>`
Section titles with optional actions.

```tsx
<SectionHeader
  icon={CalendarIcon}
  title="Daily Schedule"
  iconColor="blue.500"
  action={{
    label: 'View All',
    onClick: handleViewAll
  }}
/>
```

#### `<ScheduleItem>`
List item for schedule/timeline entries.

```tsx
<ScheduleItem
  time="08:00 AM"
  title="Morning Routine"
  category="HEALTH"
  categoryColor="green.500"
  onClick={handleItemClick}
/>
```

**Use Cases:**
- Daily schedules
- Event lists
- Timeline entries
- Task lists

#### `<HabitItem>`
Checkbox item for tracking habits.

```tsx
<HabitItem
  label="Meditate (10m)"
  isCompleted={true}
  onChange={handleToggle}
/>
```

**Use Cases:**
- Habit tracking
- Todo lists
- Checklists
- Goal tracking

---

## 🛠️ Common Patterns

### Pattern 1: Dashboard Card with List

```tsx
<Card>
  <SectionHeader
    icon={CalendarIcon}
    title="Daily Schedule"
    iconColor="blue.500"
    action={{
      label: 'View All',
      onClick: () => navigate('/schedule')
    }}
  />
  <VStack spacing={0} divider={<Divider />}>
    <ScheduleItem time="08:00 AM" title="Morning Routine" category="HEALTH" />
    <ScheduleItem time="10:00 AM" title="Deep Work" category="WORK" />
    <ScheduleItem time="01:00 PM" title="Gym" category="FITNESS" />
  </VStack>
</Card>
```

### Pattern 2: Stats Grid

```tsx
<Grid templateColumns="repeat(3, 1fr)" gap={6}>
  <GridItem>
    <StatCard
      label="Habit Streak"
      value="12 Days"
      icon={<FireIcon />}
      iconColor="orange.500"
    />
  </GridItem>
  <GridItem>
    <StatCard
      label="Next Event"
      value="10:00 AM"
      icon={<ClockIcon />}
      iconColor="blue.500"
    />
  </GridItem>
  <GridItem>
    <StatCard
      label="Workouts"
      value="4/5 week"
      icon={<DumbbellIcon />}
      iconColor="green.500"
    />
  </GridItem>
</Grid>
```

### Pattern 3: Habit Tracker

```tsx
<Card>
  <SectionHeader
    icon={TargetIcon}
    title="Habit Tracking"
    iconColor="green.500"
  />
  <Text fontSize="sm" color="gray.500" mb={4}>
    60% Complete
  </Text>
  <VStack spacing={2} align="stretch">
    <HabitItem label="Meditate (10m)" isCompleted />
    <HabitItem label="Read 20 Pages" isCompleted />
    <HabitItem label="No Sugar" />
    <HabitItem label="Hydrate 3L" />
  </VStack>
</Card>
```

---

## 🎯 Customization

### Changing Colors

Edit `/src/config/theme.ts`:

```tsx
colors: {
  brand: {
    500: '#your-color-here',
    // ... other shades
  }
}
```

### Creating Custom Icons

```tsx
const YourIcon = () => (
  <Icon viewBox="0 0 24 24" fill="currentColor">
    <path d="your-svg-path-here" />
  </Icon>
);
```

### Adding New Stat Cards

```tsx
<StatCard
  label="Your Metric"
  value="42"
  icon={<YourIcon />}
  iconColor="purple.500"
/>
```

---

## 📱 Responsive Design

Make components responsive using Chakra's props:

```tsx
<Grid
  templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
  gap={6}
>
  {/* Your cards */}
</Grid>
```

**Breakpoints:**
- `base`: Mobile (default)
- `md`: Tablet (768px+)
- `lg`: Desktop (992px+)
- `xl`: Large desktop (1280px+)

---

## 🔄 State Management Examples

### Toggling Habits

```tsx
const [habits, setHabits] = useState([
  { id: 1, label: 'Meditate', completed: false },
  { id: 2, label: 'Exercise', completed: false },
]);

const toggleHabit = (id: number) => {
  setHabits(habits.map(h => 
    h.id === id ? { ...h, completed: !h.completed } : h
  ));
};

// In render:
{habits.map(habit => (
  <HabitItem
    key={habit.id}
    label={habit.label}
    isCompleted={habit.completed}
    onChange={() => toggleHabit(habit.id)}
  />
))}
```

### Dynamic Schedule

```tsx
const [schedule, setSchedule] = useState([
  { time: '08:00 AM', title: 'Morning Routine', category: 'HEALTH' },
  // ... more items
]);

// In render:
{schedule.map((item, index) => (
  <ScheduleItem
    key={index}
    time={item.time}
    title={item.title}
    category={item.category}
    onClick={() => handleScheduleClick(item)}
  />
))}
```

---

## 🚀 Next Steps

1. **Customize the theme** in `/src/config/theme.ts`
2. **Add your own data** - Replace mock data with real data
3. **Create new pages** - Use the same component patterns
4. **Add routing** - Install React Router and create multiple pages
5. **Connect to backend** - Use the services in `/src/services/`
6. **Add authentication** - Integrate Supabase auth

---

## 📚 Additional Resources

- [Chakra UI Documentation](https://chakra-ui.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Supabase Documentation](https://supabase.com/docs)

---

## 💡 Tips

1. **Keep components small** - Easy to maintain and reuse
2. **Use TypeScript** - Catch errors early with type checking
3. **Follow naming conventions** - PascalCase for components
4. **Document your code** - Add comments for complex logic
5. **Test your components** - Write tests for critical functionality
6. **Use Chakra props** - Leverage Chakra's built-in styling props
7. **Think in components** - Break down UI into reusable pieces

## 🐛 Troubleshooting

### Icons not showing?
Make sure `@chakra-ui/icons` is installed:
```bash
npm install @chakra-ui/icons
```

### Theme not applying?
Check that `theme` is imported in `App.tsx`:
```tsx
import theme from './config/theme';
<ChakraProvider theme={theme}>
```

### Components not found?
Verify path aliases in `tsconfig.json` include `baseUrl: "src"`.

---

Happy coding! 🎉

