import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function BookDetails() {
  const { title, author, publicacao, summary, genero, paginas } = useLocalSearchParams();

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>por {author}</Text>
      <Text style={styles.genero}>Gênero: {genero}</Text>
      <Text style={styles.publicacao}>Publicado em {publicacao}</Text>
      <Text style={styles.pagina}>Nº de páginas: {paginas}</Text>
      <Text style={styles.summaryTitle}>Resumo:</Text>
      <Text style={styles.summary}>{summary}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff', // Azul claro suave
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0d47a1',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    color: '#0d47a1',
    marginBottom: 6,
  },
  genero: {
    fontSize: 16,
    color: '#0d47a1',
    marginBottom: 6,
  },
  publicacao: {
    fontSize: 14,
    color: '#0d47a1',
    marginBottom: 4,
  },
  pagina: {
    fontSize: 14,
    color: '#0d47a1',
    marginBottom: 12,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0d47a1',
    marginBottom: 8,
  },
  summary: {
    fontSize: 15,
    lineHeight: 22,
    color: '#0d47a1',
    textAlign: 'left', // texto à esquerda
  },
});