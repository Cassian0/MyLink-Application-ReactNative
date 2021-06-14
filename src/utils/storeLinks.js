
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * buscar Links salvos
 */
export async function getLinksSave(key) {
  const myLinks = await AsyncStorage.getItem(key);

  let linkSave = JSON.parse(myLinks) || [];

  return linkSave;
}

/**
 * Salvar um link no storage
 */
export async function saveLink(key, newLink) {
  let linkStored = await getLinksSave(key);

  /*Validar se tiver um link salvo com o mesmo id, preciso ignora-lo */
  const hasLink = linkStored.some(link => link.id === newLink.id);

  if (hasLink) {
    console.log('Link ja existe na lista');
    return;
  }
  linkStored.push(newLink);
  AsyncStorage.setItem(key, JSON.stringify(linkStored));
}

/**
 * Deletar os links
 */
export async function deleteLink(links, id) {
  let myLinks = links.filter((item) => {
    return (item.id !== id)
  });
  await AsyncStorage.setItem('link', JSON.stringify(myLinks));
  return myLinks;
};