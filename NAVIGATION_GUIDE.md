# Navigation Guide - Sidebar on Every Page

## ✨ How It Works

The sidebar now appears on **every page automatically** using the `AppLayout` component!

## 🏗️ Architecture

```
App.tsx
└── BrowserRouter
    └── AppLayout (contains Sidebar + Layout)
        └── Routes
            ├── Dashboard page
            ├── Habit Tracker page
            └── ... other pages
```

### Key Components

1. **`AppLayout`** (`src/components/AppLayout/`) - Wraps all pages
   - Contains the `<Sidebar>` with navigation
   - Includes the `<Layout>` wrapper for proper spacing
   - Automatically highlights active route
   - Handles navigation with React Router

2. **`App.tsx`** - Sets up routing
   ```tsx
   <BrowserRouter>
     <AppLayout>
       <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/habit-tracker" element={<HabitTracker />} />
       </Routes>
     </AppLayout>
   </BrowserRouter>
   ```

3. **Individual Pages** - Just render content
   - No need to include `<Sidebar>`
   - No need to wrap in `<Layout>`
   - Just return your page content!

## 📝 Creating a New Page

### Step 1: Create the Page Component

```tsx
// src/pages/MyNewPage/index.tsx
import { Container, VStack } from '@chakra-ui/react';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';

export const MyNewPage = () => {
  return (
    <>
      <Header userName="Alex" />
      <Container maxW="container.xl" py={8}>
        <VStack spacing={6} align="stretch">
          <Card>
            {/* Your content here */}
          </Card>
        </VStack>
      </Container>
    </>
  );
};
```

### Step 2: Add Route in App.tsx

```tsx
import { MyNewPage } from './pages/MyNewPage';

// In your Routes:
<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/habit-tracker" element={<HabitTracker />} />
  <Route path="/my-new-page" element={<MyNewPage />} />
</Routes>
```

### Step 3: Add Navigation Item (Optional)

If you want it in the sidebar, edit `src/components/AppLayout/AppLayout.tsx`:

```tsx
<Sidebar.NavItem
  icon={YourIcon}
  label="My New Page"
  isActive={location.pathname === '/my-new-page'}
  onClick={() => navigate('/my-new-page')}
/>
```

That's it! The sidebar will automatically appear on your new page.

## 🎯 Key Benefits

✅ **DRY (Don't Repeat Yourself)** - Sidebar defined once, used everywhere  
✅ **Consistent Navigation** - Same nav on all pages  
✅ **Auto-highlight** - Active page is automatically highlighted  
✅ **Easy Updates** - Change navigation in one place  
✅ **Clean Pages** - Pages only contain their own content  

## 🔧 Customizing the Sidebar

### Change Navigation Items

Edit `src/components/AppLayout/AppLayout.tsx`:

```tsx
<Sidebar>
  <Sidebar.NavItem
    icon={MyIcon}
    label="My Item"
    isActive={location.pathname === '/my-route'}
    onClick={() => navigate('/my-route')}
  />
  {/* Add more items */}
</Sidebar>
```

### Add Custom Icons

```tsx
const MyIcon = () => (
  <Icon viewBox="0 0 24 24" fill="currentColor">
    <path d="your-svg-path-here" />
  </Icon>
);
```

### Conditional Navigation Items

Show different nav items based on user role or state:

```tsx
export const AppLayout = ({ children }: AppLayoutProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = true; // Your logic here

  return (
    <Box>
      <Sidebar>
        <Sidebar.NavItem
          icon={CalendarIcon}
          label="Dashboard"
          isActive={location.pathname === '/'}
          onClick={() => navigate('/')}
        />
        
        {/* Only show for admins */}
        {isAdmin && (
          <Sidebar.NavItem
            icon={SettingsIcon}
            label="Admin Panel"
            isActive={location.pathname === '/admin'}
            onClick={() => navigate('/admin')}
          />
        )}
      </Sidebar>
      <Layout>{children}</Layout>
    </Box>
  );
};
```

## 🎨 Page Layout Patterns

### Standard Page

```tsx
export const MyPage = () => {
  return (
    <>
      <Header userName="Alex" />
      <Container maxW="container.xl" py={8}>
        {/* Your content */}
      </Container>
    </>
  );
};
```

### Full-Width Page (No Container)

```tsx
export const MyFullWidthPage = () => {
  return (
    <>
      <Header userName="Alex" />
      <Box w="full" py={8} px={8}>
        {/* Full width content */}
      </Box>
    </>
  );
};
```

### Page Without Header

```tsx
export const MyMinimalPage = () => {
  return (
    <Container maxW="container.xl" py={8}>
      {/* Just content, no header */}
    </Container>
  );
};
```

## 🔄 Navigation Methods

### 1. Via Sidebar (Automatic)

Click any sidebar nav item - they're already wired up!

### 2. Programmatic Navigation

```tsx
import { useNavigate } from 'react-router-dom';

export const MyComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/habit-tracker');
  };

  return <Button onClick={handleClick}>Go to Habits</Button>;
};
```

### 3. Link Component

```tsx
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';

<Link as={RouterLink} to="/habit-tracker">
  Go to Habits
</Link>
```

## 📱 Mobile Considerations

For mobile responsiveness, you might want to:

1. **Hide sidebar on mobile** and show a hamburger menu
2. **Make sidebar collapsible**
3. **Use a bottom navigation bar** on mobile

Example toggle logic:

```tsx
const [isSidebarOpen, setIsSidebarOpen] = useState(true);

// In Sidebar component:
<Sidebar isOpen={isSidebarOpen} />
```

## 🐛 Troubleshooting

### Sidebar not showing?

Check that `AppLayout` wraps your Routes in `App.tsx`:

```tsx
<BrowserRouter>
  <AppLayout>  {/* This must wrap Routes */}
    <Routes>
      {/* routes */}
    </Routes>
  </AppLayout>
</BrowserRouter>
```

### Active state not working?

Make sure the `isActive` prop matches the route:

```tsx
isActive={location.pathname === '/your-route'}
```

### Page content hidden behind sidebar?

The `Layout` component handles the left margin. Make sure your page content is wrapped properly:

```tsx
// In AppLayout
<Layout>{children}</Layout>

// In your page - NO extra Layout needed
export const MyPage = () => {
  return (
    <>
      <Header />
      <Container>{/* content */}</Container>
    </>
  );
};
```

## 📚 Related Files

- `src/components/AppLayout/AppLayout.tsx` - Main layout with sidebar
- `src/components/Sidebar/Sidebar.tsx` - Sidebar component
- `src/components/Layout/Layout.tsx` - Content spacing wrapper
- `src/App.tsx` - Route configuration

## 🚀 Next Steps

1. ✅ Sidebar is on every page
2. Add more routes as needed
3. Customize navigation items
4. Add authentication-based nav
5. Add mobile responsive menu
6. Add breadcrumbs or page titles

---

**Pro Tip:** When creating new pages, just copy the structure from `HabitTracker/index.tsx` - it's the simplest example!

