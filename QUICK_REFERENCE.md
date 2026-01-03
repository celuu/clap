# Quick Reference - Component Cheat Sheet

## 🚀 Import Patterns

```tsx
// Components
import { Card } from '../../components/Card';
import { StatCard } from '../../components/StatCard';
import { Sidebar } from '../../components/Sidebar';
import { Layout } from '../../components/Layout';
import { Header } from '../../components/Header';
import { SectionHeader } from '../../components/SectionHeader';
import { ScheduleItem } from '../../components/ScheduleItem';
import { HabitItem } from '../../components/HabitItem';

// Chakra UI
import { Box, Grid, GridItem, VStack, HStack, Text, Icon } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';

// Config
import theme from '../../config/theme';
import { supabase } from '../../config';
```

---

## 📦 Component Quick Refs

### Card
```tsx
<Card hover>Content</Card>
```

### StatCard
```tsx
<StatCard
  label="Metric Name"
  value="Value"
  icon={<Icon />}
  iconColor="blue.500"
/>
```

### Sidebar
```tsx
<Sidebar>
  <Sidebar.NavItem icon={Icon} label="Nav Item" isActive />
</Sidebar>
```

### Layout
```tsx
<Layout>
  <Header />
  <Container>{/* Content */}</Container>
</Layout>
```

### Header
```tsx
<Header userName="Name" date="Optional Date" />
```

### SectionHeader
```tsx
<SectionHeader
  icon={Icon}
  title="Section"
  iconColor="blue.500"
  action={{ label: "Action", onClick: fn }}
/>
```

### ScheduleItem
```tsx
<ScheduleItem
  time="10:00 AM"
  title="Event"
  category="CATEGORY"
  categoryColor="green.500"
  onClick={fn}
/>
```

### HabitItem
```tsx
<HabitItem
  label="Habit"
  isCompleted={false}
  onChange={fn}
/>
```

---

## 🎨 Common Chakra Props

### Layout
```tsx
p={6}              // padding: 1.5rem
px={4}             // padding-left/right: 1rem
py={2}             // padding-top/bottom: 0.5rem
m={4}              // margin: 1rem
w="full"           // width: 100%
h="100vh"          // height: 100vh
maxW="container.xl" // max-width: 1280px
```

### Flexbox
```tsx
display="flex"
justify="space-between"
align="center"
direction="column"
wrap="wrap"
gap={4}
```

### Grid
```tsx
<Grid
  templateColumns="repeat(3, 1fr)"
  gap={6}
>
  <GridItem>{/* Content */}</GridItem>
</Grid>
```

### Colors
```tsx
color="gray.500"
bg="white"
borderColor="gray.200"
```

### Typography
```tsx
fontSize="md"      // 1rem
fontWeight="bold"  // 700
textAlign="center"
```

### Effects
```tsx
boxShadow="md"
borderRadius="lg"
transition="all 0.2s"
_hover={{ bg: 'gray.100' }}
cursor="pointer"
```

---

## 🎯 Common Patterns

### Dashboard Grid
```tsx
<Grid templateColumns="repeat(3, 1fr)" gap={6}>
  <GridItem><StatCard /></GridItem>
  <GridItem><StatCard /></GridItem>
  <GridItem><StatCard /></GridItem>
</Grid>
```

### Two Column Layout
```tsx
<Grid templateColumns="repeat(2, 1fr)" gap={6}>
  <GridItem><Card>Left</Card></GridItem>
  <GridItem><Card>Right</Card></GridItem>
</Grid>
```

### List with Dividers
```tsx
<VStack spacing={0} divider={<Divider />}>
  <ScheduleItem />
  <ScheduleItem />
  <ScheduleItem />
</VStack>
```

### Vertical Stack
```tsx
<VStack spacing={4} align="stretch">
  <HabitItem />
  <HabitItem />
</VStack>
```

### Horizontal Stack
```tsx
<HStack spacing={4} justify="space-between">
  <Text>Left</Text>
  <Button>Right</Button>
</HStack>
```

---

## 🎨 Color Tokens

### Brand Colors
```tsx
brand.50   // lightest
brand.100
brand.200
brand.300
brand.400
brand.500  // main brand color
brand.600
brand.700
brand.800
brand.900  // darkest
```

### Common Colors
```tsx
blue.500    // Info
green.500   // Success
orange.500  // Warning
red.500     // Error
gray.500    // Muted text
gray.800    // Body text
```

---

## 📱 Responsive Breakpoints

```tsx
// Single value
<Box w="full" />

// Responsive values
<Box
  w={{ base: 'full', md: '50%', lg: '33%' }}
  fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
/>
```

**Breakpoints:**
- `base`: 0px (mobile)
- `sm`: 480px
- `md`: 768px (tablet)
- `lg`: 992px (desktop)
- `xl`: 1280px
- `2xl`: 1536px

---

## 🎯 State Management Examples

### Boolean State
```tsx
const [isOpen, setIsOpen] = useState(false);
```

### Array State
```tsx
const [items, setItems] = useState([]);
```

### Object State
```tsx
const [user, setUser] = useState({ name: '', email: '' });
```

### Toggling
```tsx
const toggle = () => setIsOpen(!isOpen);
```

### Updating Array
```tsx
const addItem = (item) => setItems([...items, item]);
const updateItem = (id) => setItems(items.map(i => 
  i.id === id ? { ...i, completed: !i.completed } : i
));
const removeItem = (id) => setItems(items.filter(i => i.id !== id));
```

---

## 🔌 Supabase Quick Examples

### Fetch Data
```tsx
const { data, error } = await supabase
  .from('table')
  .select('*');
```

### Insert
```tsx
const { data, error } = await supabase
  .from('table')
  .insert({ field: 'value' });
```

### Update
```tsx
const { data, error } = await supabase
  .from('table')
  .update({ field: 'value' })
  .eq('id', id);
```

### Delete
```tsx
const { data, error } = await supabase
  .from('table')
  .delete()
  .eq('id', id);
```

---

## 🎨 Custom Icons

```tsx
const CustomIcon = () => (
  <Icon viewBox="0 0 24 24" fill="currentColor">
    <path d="M12,2L2,7V17H22V7M12,4.18L17.83,7H6.17M12,7.5A2.5,2.5 0 0,0 9.5,10A2.5,2.5 0 0,0 12,12.5A2.5,2.5 0 0,0 14.5,10A2.5,2.5 0 0,0 12,7.5Z" />
  </Icon>
);
```

---

## 💡 Quick Tips

1. **Use Chakra props** instead of custom CSS
2. **Compose components** - build complex UIs from simple parts
3. **Use responsive values** - `{{ base: 'value', md: 'value' }}`
4. **Leverage VStack/HStack** for layouts
5. **Check Chakra docs** for more props and patterns

---

## 📚 Resources

- **Component Guide**: `COMPONENT_GUIDE.md`
- **Architecture**: `ARCHITECTURE.md`
- **Getting Started**: `GETTING_STARTED.md`
- **Chakra Docs**: https://chakra-ui.com/docs

