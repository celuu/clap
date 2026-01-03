# Getting Started with Your LifeOS Dashboard Template

## 🎉 What's Been Built

Your project now includes a complete dashboard template based on the LifeOS design with:

✅ **Custom Chakra UI Theme** with brand colors and component styles  
✅ **8 Reusable Components** ready to use  
✅ **Complete Dashboard Page** with all sections implemented  
✅ **Organized File Structure** following React best practices  
✅ **TypeScript Support** for type safety  
✅ **Responsive Design** with Chakra UI  

## 🚀 Quick Start

### 1. Install Dependencies (if not already done)
```bash
npm install
```

### 2. Start Development Server
```bash
npm start
```

The app will open at `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

## 📁 What's New

### Components Created

```
src/components/
├── Card/               # Base card component
├── StatCard/           # Metric display cards
├── Sidebar/            # Navigation sidebar
├── Layout/             # Content layout wrapper
├── Header/             # Page header
├── SectionHeader/      # Section titles
├── ScheduleItem/       # Schedule list items
└── HabitItem/          # Habit tracking checkboxes
```

### Configuration

```
src/config/
├── theme.ts            # Custom Chakra UI theme
├── supabase.ts         # Supabase client
└── index.ts            # Config exports
```

### Pages

```
src/pages/
└── HomePage/           # Complete dashboard page
    └── index.tsx
```

## 🎨 Component Examples

### Using the StatCard

```tsx
import { StatCard } from '../../components/StatCard';

<StatCard
  label="Habit Streak"
  value="12 Days"
  icon={<FireIcon />}
  iconColor="orange.500"
/>
```

### Using the Card Component

```tsx
import { Card } from '../../components/Card';

<Card hover>
  <Text>Your content here</Text>
</Card>
```

### Building a Schedule Section

```tsx
import { Card } from '../../components/Card';
import { SectionHeader } from '../../components/SectionHeader';
import { ScheduleItem } from '../../components/ScheduleItem';
import { VStack, Divider } from '@chakra-ui/react';

<Card>
  <SectionHeader
    icon={CalendarIcon}
    title="Daily Schedule"
    iconColor="blue.500"
    action={{
      label: 'View All',
      onClick: () => console.log('clicked')
    }}
  />
  <VStack spacing={0} divider={<Divider />}>
    <ScheduleItem
      time="08:00 AM"
      title="Morning Routine"
      category="HEALTH"
      categoryColor="green.500"
    />
    {/* More items... */}
  </VStack>
</Card>
```

## 🎯 Key Features

### 1. Theme Customization

Edit `/src/config/theme.ts` to customize:
- Brand colors
- Component styles
- Global styles
- Shadows and spacing

```tsx
colors: {
  brand: {
    500: '#3d21e6',  // Change this to your brand color
    // ...
  }
}
```

### 2. Responsive Layout

All components use Chakra UI's responsive props:

```tsx
<Grid
  templateColumns={{
    base: '1fr',              // Mobile: 1 column
    md: 'repeat(2, 1fr)',     // Tablet: 2 columns
    lg: 'repeat(3, 1fr)'      // Desktop: 3 columns
  }}
  gap={6}
>
  {/* Your content */}
</Grid>
```

### 3. Type Safety

All components are fully typed with TypeScript:

```tsx
interface StatCardProps {
  label: string;
  value: string;
  icon: ReactNode;
  iconColor?: string;
}
```

## 📚 Documentation

- **`COMPONENT_GUIDE.md`** - Detailed guide for all components
- **`ARCHITECTURE.md`** - Project structure and best practices
- **`src/components/README.md`** - Component API reference

## 🔧 Customization Guide

### Adding Your Data

Replace the mock data in `HomePage/index.tsx`:

```tsx
// Example: Fetch from your API
const [habits, setHabits] = useState([]);

useEffect(() => {
  // Fetch your data
  fetchHabits().then(setHabits);
}, []);

// Render with your data
{habits.map(habit => (
  <HabitItem
    key={habit.id}
    label={habit.label}
    isCompleted={habit.completed}
  />
))}
```

### Creating New Pages

1. Create a new folder in `/src/pages/`
2. Use the same component patterns
3. Import and compose the reusable components

```tsx
// src/pages/SettingsPage/index.tsx
import { Layout } from '../../components/Layout';
import { Card } from '../../components/Card';

export const SettingsPage = () => {
  return (
    <Layout>
      <Card>
        {/* Your settings content */}
      </Card>
    </Layout>
  );
};
```

### Adding Navigation

Install React Router:
```bash
npm install react-router-dom
```

Update `App.tsx`:
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}
```

## 🎨 Color Scheme

The template uses these color tokens:

| Usage | Color Token | Hex |
|-------|-------------|-----|
| Primary | `brand.500` | `#3d21e6` |
| Success | `green.500` | Chakra default |
| Warning | `orange.500` | Chakra default |
| Info | `blue.500` | Chakra default |
| Text | `gray.800` | Chakra default |
| Muted | `gray.500` | Chakra default |

## 🔌 Connecting Supabase

Your Supabase client is already configured! Create a `.env` file:

```env
REACT_APP_SUPABASE_URL=your_url_here
REACT_APP_SUPABASE_ANON_KEY=your_key_here
```

Use it in your components:

```tsx
import { supabase } from '../../config';

const fetchData = async () => {
  const { data, error } = await supabase
    .from('your_table')
    .select('*');
  
  if (error) console.error(error);
  return data;
};
```

## 📱 Making It Responsive

Example of responsive grid:

```tsx
<Grid
  templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
  gap={6}
>
  <GridItem>
    <StatCard {...props} />
  </GridItem>
  {/* More items */}
</Grid>
```

Responsive text sizes:

```tsx
<Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
  Responsive Text
</Text>
```

## 🐛 Troubleshooting

### Port 3000 is already in use?
```bash
# Kill the process on port 3000
lsof -ti:3000 | xargs kill

# Or use a different port
PORT=3001 npm start
```

### Components not found?
Make sure you're using relative imports:
```tsx
// ✅ Correct
import { Card } from '../../components/Card';

// ❌ Incorrect (CRA doesn't support path aliases without ejecting)
import { Card } from '@/components/Card';
```

### Theme not applying?
Check that you're importing the custom theme in `App.tsx`:
```tsx
import theme from './config/theme';
<ChakraProvider theme={theme}>
```

## 🚀 Next Steps

1. **Customize the theme** to match your brand
2. **Add real data** - Replace mock data with API calls
3. **Create more pages** - Settings, Profile, Analytics, etc.
4. **Add routing** - Install React Router for navigation
5. **Implement auth** - Use Supabase authentication
6. **Add state management** - Consider Context API or Zustand
7. **Write tests** - Add tests for critical functionality

## 📖 Learn More

- [Chakra UI Docs](https://chakra-ui.com/docs)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs)
- [Supabase Docs](https://supabase.com/docs)

## 💡 Tips

- **Use the components** - They're designed to be composable
- **Follow the patterns** - Check `HomePage/index.tsx` for examples
- **Keep it simple** - Start with small changes
- **Read the guides** - `COMPONENT_GUIDE.md` has detailed examples
- **Experiment** - All components accept Chakra UI props

---

Happy building! 🎉

If you have questions, check out:
- `COMPONENT_GUIDE.md` for component usage
- `ARCHITECTURE.md` for project structure
- `src/components/README.md` for API reference

