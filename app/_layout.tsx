import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Leia.Me',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="books"
        options={{ headerTitle: 'Lista de Livros' }}
      />
      <Stack.Screen
        name="bookDetails"
        options={{ headerTitle: 'Detalhes do Livro' }}
      />
    </Stack>
  );
}
