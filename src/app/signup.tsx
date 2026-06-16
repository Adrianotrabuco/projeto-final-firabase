import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { auth } from "@/lib/firebase";
import { validarCadastro } from "@/validations/auth-validations";

import { Link, useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmarSenha, setConfirmarSenha] = useState<string>("");
  const [nome, setNome] = useState<string>("");

  function verificationEmail(): boolean {
    const trimmedEmail = email.trim();
    if (!trimmedEmail) {
      Alert.alert("Digite um e-mail!");
      return false;
    }
    if (!trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      Alert.alert("Email invalido!");
      return false;
    }
    return true;
  }

  function getFirebaseAuthErrorMessage(error: any): string {
    const code = error?.code ?? "";

    switch (code) {
      case "auth/email-already-in-use":
        return "Este e-mail ja esta em uso. Faca login ou use outro e-mail.";
      case "auth/invalid-email":
        return "O e-mail informado e invalido.";
      case "auth/weak-password":
        return "A senha precisa conter no minimo 8 caracteres, 1 caracter especial.";
      case "auth/network-request-failed":
        return "Falha na conexao. Verifique sua internet e tente novamente.";
      case "auth/operation-not-allowed":
        return "Esse tipo de cadastro nao esta habilitado no Firebase.";
      default:
        return error?.message ?? "Erro desconhecido ao criar conta.";
    }
  }

  async function handleRegister() {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        senha,
      );

      Alert.alert("Conta criada com sucesso!", user.user.email ?? "", [
        {
          text: "Ok",
          onPress: () => router.replace("/"),
        },
      ]);
    } catch (error: any) {
      console.log("Erro ao criar conta:", error);
      Alert.alert("Erro ao criar conta", getFirebaseAuthErrorMessage(error));
    }
  }

  function handlePress() {
    const erroCadastro = validarCadastro(
      nome.trim(),
      email.trim(),
      senha,
      confirmarSenha,
    );

    if (erroCadastro) {
      Alert.alert("Erro", erroCadastro);
      return;
    }

    if (!verificationEmail()) return;

    handleRegister();
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/image2.png")}
          style={styles.ilustration}
        />

        <Text style={styles.title}>Cadastrar</Text>
        <Text style={styles.subtitle}>Crie sua conta para acessar</Text>

        <View style={styles.form}>
          <Input placeholder="Nome" value={nome} onChangeText={setNome} />

          <Input
            placeholder="E-mail"
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
          />

          <Input
            placeholder="Senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          <Input
            placeholder="Confirme sua senha"
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />

          <Button label="Cadastrar" onPress={handlePress} />
        </View>

        <Text style={styles.footerText}>
          Ja tem uma conta?
          <Link href="/" style={styles.footerLink}>
            {" "}
            Entrar Aqui
          </Link>
        </Text>
      </View>
    </ScrollView>
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
