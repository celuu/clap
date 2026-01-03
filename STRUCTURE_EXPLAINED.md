# Project Structure Explained

## 📂 Component Structure

We use a **flat, single-file structure** for components. No nested folders, no index files!

### Current Structure

```
src/components/
├── README.md
├── AppLayout.tsx       # Main app layout with sidebar
├── Card.tsx            # Base card component
├── HabitItem.tsx       # Habit tracking checkbox item
├── Header.tsx          # Page header
├── Layout.tsx          # Content spacing wrapper
├── ScheduleItem.tsx    # Schedule list item
├── SectionHeader.tsx   # Section title with action
├── Sidebar.tsx         # Navigation sidebar
└── StatCard.tsx        # Metric display card
```

### Why This Approach?

✅ **Simple** - One file per component, easy to find  
✅ **Clean imports** - `import { Card } from '../../components/Card'`  
✅ **Less files** - No redundant index.tsx files  
✅ **Easy to navigate** - All components in one place  
✅ **Fast** - No extra file lookups  

### Adding a New Component

Just create a new `.tsx` file:

```tsx
// src/components/Button.tsx
import { Button as ChakraButton } from '@chakra-ui/react';

export const Button = ({ children, ...props }) => {
  return (
    <ChakraButton colorScheme="brand" {...props}>
      {children}
    </ChakraButton>
  );
};
```

Then import it:

```tsx
import { Button } from '../../components/Button';
```

Done! No folders, no index files needed.

---

## 📁 Full Project Structure

```
/Users/cluu/Projects/clap/
├── public/                    # Static files
├── src/
│   ├── assets/               # Images, fonts, SVGs
│   │   └── logo.svg
│   ├── components/           # ⭐ Reusable UI components (flat!)
│   │   ├── AppLayout.tsx
│   │   ├── Card.tsx
│   │   ├── HabitItem.tsx
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   ├── ScheduleItem.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── Sidebar.tsx
│   │   └── StatCard.tsx
│   ├── config/              # Configuration
│   │   ├── index.ts
│   │   ├── supabase.ts
│   │   └── theme.ts         # Chakra UI theme
│   ├── constants/           # App constants
│   │   └── index.ts
│   ├── features/            # Feature-based modules (empty for now)
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Page components
│   │   ├── Dashboard/
│   │   │   └── index.tsx
│   │   └── HabitTracker/
│   │       └── index.tsx
│   ├── services/            # API services
│   ├── styles/              # Global styles
│   │   ├── App.css
│   │   └── index.css
│   ├── types/               # TypeScript types
│   │   └── index.ts
│   ├── utils/               # Utility functions
│   │   └── index.ts
│   ├── App.tsx              # Main app with routing
│   └── index.tsx            # Entry point
├── ARCHITECTURE.md          # Architecture guide
├── COMPONENT_GUIDE.md       # Component usage guide
├── NAVIGATION_GUIDE.md      # Navigation/routing guide
├── QUICK_REFERENCE.md       # Quick reference cheat sheet
├── STRUCTURE_EXPLAINED.md   # This file!
└── package.json
```

---

## 🎯 Import Patterns

### Components (Flat Structure)
```tsx
import { Card } from '../../components/Card';
import { StatCard } from '../../components/StatCard';
import { Sidebar } from '../../components/Sidebar';
```

### Config
```tsx
import theme from '../../config/theme';
import { supabase } from '../../config';
```

### Chakra UI
```tsx
import { Box, VStack, Text } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
```

---

## 📦 When to Use Folders

We keep folders for **pages** since they're route-based:

```
pages/
├── Dashboard/
│   └── index.tsx
├── HabitTracker/
│   └── index.tsx
└── Settings/
    └── index.tsx
```

Each page folder can have:
- `index.tsx` - Main page component
- `components/` - Page-specific components (if needed)
- `hooks/` - Page-specific hooks (if needed)

---

## 🔄 Comparison: Before vs After

### Before (Nested Folders)
```
components/
├── Card/
│   ├── Card.tsx
│   └── index.tsx          # Just exports Card
├── StatCard/
│   ├── StatCard.tsx
│   └── index.tsx          # Just exports StatCard
└── Header/
    ├── Header.tsx
    └── index.tsx          # Just exports Header
```

Import:
```tsx
import { Card } from '../../components/Card';  // Same!
```

### After (Flat Files) ✨
```
components/
├── Card.tsx
├── StatCard.tsx
└── Header.tsx
```

Import:
```tsx
import { Card } from '../../components/Card';  // Same!
```

**Result:** Same imports, half the files! 🎉

---

## 🛠️ Guidelines

### ✅ Do This

- Put simple components in single `.tsx` files
- Keep component files focused and small
- Export component with `export const ComponentName = ...`
- Use descriptive names (PascalCase)

### ❌ Don't Do This

- Don't create folders for simple components
- Don't create index.tsx files that just re-export
- Don't put multiple unrelated components in one file
- Don't use default exports for components

---

## 💡 Pro Tips

1. **VSCode Quick Open**: Press `Cmd+P` and type the component name - no more navigating nested folders!

2. **Clean imports**: All component imports look the same:
   ```tsx
   import { ComponentName } from '../../components/ComponentName';
   ```

3. **Easy refactoring**: Move components around without breaking the folder structure.

4. **Simpler git diffs**: Changes to one component = changes to one file.

---

## 📚 Related Guides

- **Component API**: See `src/components/README.md`
- **Usage Examples**: See `COMPONENT_GUIDE.md`
- **Architecture**: See `ARCHITECTURE.md`
- **Navigation**: See `NAVIGATION_GUIDE.md`

---

**Bottom Line:** Simple is better. One component = one file. Easy! 🚀

