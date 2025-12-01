# Nubank Clone - React Native 🎆

Um clone de alta fidelidade da interface do Nubank, focado em **arquitetura escalável**, **animações complexas** e **autenticação biométrica**.

Este projeto foi desenvolvido para dominar o ecossistema **Expo** e as bibliotecas mais modernas do React Native.

## 📱 Screenshots

<div style="display: flex; flex-direction: row; gap: 10px;">
  
  https://github.com/user-attachments/assets/56b1644a-94c9-4df9-a4d1-36d107c80ef1

</div>

## 🚀 Tecnologias Utilizadas

* **Core:** React Native, Expo (SDK 52)
* **Navegação:** [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)
* **Estilização:** [NativeWind](https://www.nativewind.dev/) (TailwindCSS para React Native)
* **Gerenciamento de Estado:** [Zustand](https://github.com/pmndrs/zustand) (com persistência local)
* **Animações & Gestos:** * [React Native Reanimated 4](https://docs.swmansion.com/react-native-reanimated/)
    * [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/)
* **Componentes Avançados:**
    * [@gorhom/bottom-sheet](https://ui.gorhom.dev/components/bottom-sheet) (Menu deslizante profissional)
    * [Expo Blur](https://docs.expo.dev/versions/latest/sdk/blur/) (Efeito de vidro na TabBar)
* **Segurança & Hardware:**
    * `expo-local-authentication` (Biometria / FaceID)
    * `expo-secure-store` (Armazenamento criptografado de tokens)
    * `async-storage` (Persistência de dados simples)

## ✨ Funcionalidades Principais

### 🔐 Autenticação (Fluxo Completo)
* **Simulação de Backend:** Cadastro de senha salvo localmente (`AsyncStorage`) e token de sessão seguro (`SecureStore`).
* **Biometria:** Login rápido com digital/FaceID, validando o token de sessão armazenado.
* **Persistência:** O app "lembra" do usuário (Auto-login) ao reabrir.
* **Logout:** Limpeza segura de tokens e redirecionamento para fluxo de senha.

### 🎨 UI/UX Avançada
* **Custom TabBar:** Barra de navegação flutuante com efeito **Glassmorphism** (Blur) e indicador animado que segue a aba ativa.
* **Infinite Carousel:** Carrossel customizado construído com `FlatList`, com paginação animada e autoplay inteligente (pausa ao sair da tela).
* **Smart Bottom Sheet:** Menu inferior com rodapé fixo (`Sticky Footer`), gestos isolados e snap points precisos.
* **Animations:** Botão flutuante que acompanha a altura do teclado suavemente (`useAnimatedKeyboard`).

## 🔧 Como Rodar

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/trolimdev-22/nubank-clone.git](https://github.com/trolimdev-22/nubank-clone.git)
    ```
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Como este projeto usa bibliotecas nativas (Biometria, Reanimated), recomenda-se usar uma **Development Build**:
    ```bash
    eas build -p android --profile development
    ```
4.  Inicie o servidor:
    ```bash
    npx expo start --dev-client
    ```

---
Desenvolvido por [Thiago Rolim](https://github.com/trolimdev-22)
