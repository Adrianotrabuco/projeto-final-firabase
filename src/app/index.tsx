import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

import { Link, useRouter } from "expo-router";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  function verificationEmail(): boolean {
    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail) {
      Alert.alert("Digite um e-mail!");
      return false;
    }
    if (!trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      Alert.alert("Email inválido!");
      return false;
    }
    return true;
  }

  function verificationPassword(): boolean {
    if (!senha) {
      Alert.alert("Digite sua senha!");
      return false;
    }
    return true;
  }

  function getFirebaseAuthErrorMessage(error: any): string {
    const code = error?.code ?? "";

    switch (code) {
      case "auth/user-not-found":
        return "Usuário não encontrado. Verifique o e-mail ou cadastre-se.";
      case "auth/wrong-password":
        return "Senha incorreta. Tente novamente.";
      case "auth/invalid-email":
        return "O e-mail informado é inválido.";
      case "auth/network-request-failed":
        return "Falha na conexão. Verifique sua internet e tente novamente.";
      default:
        return error?.message ?? "Erro desconhecido ao entrar.";
    }
  }

  async function handleLogin() {
    if (!verificationEmail()) return;
    if (!verificationPassword()) return;

    try {
      const logged = await signInWithEmailAndPassword(
        auth,
        email.trim().toLowerCase(),
        senha,
      );

      Alert.alert("Login realizado!", logged.user.email ?? "");
      router.replace("/home");
    } catch (error: any) {
      console.log("Erro no login: ", error);
      Alert.alert("Erro ao entrar", getFirebaseAuthErrorMessage(error));
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <Image
            source={require("@/assets/image1.png")}
            style={styles.ilustration}
          />

          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>
            Acesse sua conta com e-mail e senha
          </Text>

          <View style={styles.form}>
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <Input
              placeholder="Senha"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            <Button label="Entrar" onPress={handleLogin} />
          </View>

          <Text style={styles.footerText}>
            Não tem uma conta?
            <Link href="/signup" style={styles.footerLink}>
              {" "}
              Cadastre-se aqui
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDFDFD",
    padding: 32,
  },
  ilustration: {
    width: "100%",
    height: 330,
    resizeMode: "contain",
    marginTop: 62,
  },
  form: {
    marginTop: 24,
    gap: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
  },
  subtitle: {
    fontSize: 16,
  },
  footerText: {
    textAlign: "center",
    marginTop: 24,
    color: "#585860",
  },
  footerLink: {
    color: "#0929b8",
    fontWeight: "700",
  },
});
