
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image
} from 'react-native';
import {
  Shield, User, Mail, Lock, Smartphone, CheckCircle2, AlertTriangle, 
  XCircle, ShieldCheck, Laptop, RefreshCw, ArrowRight, Settings, 
  Bell, Users, Activity
} from 'lucide-react-native';

// ==========================================
// COMPONENTES REUTILIZABLES
// ==========================================

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>BA Protege +</Text>
  </View>
);

const PrimaryButton = ({ title, onPress, outline = false, disabled = false }: any) => (
  <TouchableOpacity 
    style={[styles.btn, outline ? styles.btnOutline : styles.btnSolid, disabled && { opacity: 0.5 }]} 
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={[styles.btnText, outline ? styles.btnTextOutline : styles.btnTextSolid]}>{title}</Text>
  </TouchableOpacity>
);

const CustomInput = ({ icon, placeholder, secureTextEntry = false }: any) => (
  <View style={styles.inputContainer}>
    <TextInput 
      style={styles.input} 
      placeholder={placeholder} 
      placeholderTextColor="#999"
      secureTextEntry={secureTextEntry}
    />
    {icon && <View style={styles.inputIcon}>{icon}</View>}
  </View>
);

const IconCircle = ({ icon, color = "#0060CC", size = 60, bg = "#005fccbd" }: any) => (
  <View style={[styles.iconCircle, { backgroundColor: bg, width: size, height: size, borderRadius: size / 1, alignSelf: 'center' }]}>
    {icon}
  </View>
);

// ==========================================
// PANTALLAS
// ==========================================

// 1. Inicio / Login
const WelcomeScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
     <ScreenTitle text="PROTECCIÓN DIGITAL PARA TU FAMILIA" />
     {/* <Shield size={180} color="#00B4D8" style={{ marginVertical: 30, alignSelf: 'center' }} /> */}
    <Image source={require('./img/contorno-escudo-marca-verificacion-plano.png')}
    style={{ width: 250, height: 250, resizeMode: 'contain', alignSelf: 'center' }} />
    <View style={styles.contentCenter}>
       
      <Text style={styles.description}>
        "Bloquea inteligente de sitios y aplicaciones de apuestas para cuidar el entorno de tus hijos."
      </Text>
      <PrimaryButton title="Inicio de sesión" onPress={() => navigation.navigate('Login')} />
      <PrimaryButton title="Registrarse" onPress={() => navigation.navigate('Register')} outline />
    </View>
  </View>
);

// 2. Crear Cuenta
const RegisterScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
    <ScreenTitle text="Crear Cuenta" />
    <IconCircle icon={<User size={50} color="#fff" />} size={80} />
    <ScrollView contentContainerStyle={styles.content}>
      <CustomInput placeholder="Nombre" />
      <CustomInput placeholder="Apellido" />
      <CustomInput placeholder="Correo electrónico" />
      <CustomInput placeholder="Contraseña" secureTextEntry icon={<Lock size={20} color="#999" />} />
      <CustomInput placeholder="Repetir contraseña" secureTextEntry icon={<Lock size={20} color="#999" />} />

      <TouchableOpacity style={styles.checkboxContainer}>
        <View style={styles.checkbox} />
        <Text style={styles.checkboxText}>Acepto términos y condiciones</Text>
      </TouchableOpacity>

      <PrimaryButton title="Continuar" onPress={() => navigation.navigate('ConfirmAccount')} />
    </ScrollView>
  </View>
);

// 3. Confirmación de cuenta
const ConfirmAccountScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
    <ScreenTitle text="Confirmación de cuenta" />
    <IconCircle icon={<Mail size={50} color="#fff" />} size={80} />
    <View style={styles.contentCenter}>
      <Text style={styles.subtitle}>¡Revisa tu correo!</Text>
      <Text style={styles.description}>
        Te enviamos un mail para confirmar tu cuenta. Recordá revisar el spam o correo no deseado.
      </Text>
      <CustomInput placeholder="Código de mail" />
      <PrimaryButton title="Confirmar e-mail" onPress={() => navigation.navigate('Login')} />
    </View>
  </View>
);

// 4. Ingresar a tu cuenta (Login)
const LoginScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
    <ScreenTitle text="Ingresa a tu cuenta" />
    <IconCircle icon={<ArrowRight size={50} color="#fff" />} size={80} />
    <View style={styles.contentCenter}>
      <CustomInput placeholder="Correo electrónico" />
      <CustomInput placeholder="Contraseña" secureTextEntry icon={<Lock size={20} color="#999" />} />
      
      <TouchableOpacity onPress={() => navigation.navigate('Recover')}>
        <Text style={styles.linkText}>¿Olvidé mi contraseña?</Text>
      </TouchableOpacity>

      <PrimaryButton title="Continuar" onPress={() => navigation.navigate('Activate')} />
    </View>
  </View>
);

// 5. Recuperar contraseña
const RecoverScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
    <ScreenTitle text="Recuperar tu cuenta" />
    <IconCircle icon={<Lock size={50} color="#fff" />} size={80} />
    <View style={styles.contentCenter}>
      <Text style={styles.description}>Ingrese su correo, le enviaremos un link de recuperación</Text>
      <CustomInput placeholder="Correo electrónico" />
      <PrimaryButton title="Enviar" onPress={() => navigation.goBack()} />
    </View>
  </View>
);

// 6. Activar BA Protege (Configuración de permisos)
const ActivateScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
    <ScreenTitle text="Activa BA Protege +" />
    <IconCircle icon={<ShieldCheck size={50} color="#fff" />} size={80} />
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.description}>Configuración de Permisos{'\n'}Para que la solución funcione correctamente, necesitamos algunos permisos.</Text>
      <View style={styles.infoCard}>
        <View style={styles.infoRow}><Text style={styles.infoTitle}>Paso 1: Administrar</Text><CheckCircle2 color="#00B4D8" size={20} /></View>
        <Text style={styles.infoText}>Permisos activados correctamente</Text>
      </View>
      <View style={styles.infoCard}>
        <View style={styles.infoRow}><Text style={styles.infoTitle}>Paso 2: Conexión VPN</Text><CheckCircle2 color="#00B4D8" size={20} /></View>
        <Text style={styles.infoText}>La conexión VPN nos permite proteger la navegación y acceder a los sitios bloqueados...</Text>
      </View>
      <View style={[styles.infoCard, { borderColor: '#00B4D8' }]}>
        <View style={styles.infoRow}><Text style={[styles.infoTitle, { color: '#0077B6' }]}>Activar conexión VPN</Text><View style={styles.vpnSwitch} /></View>
        <Text style={styles.infoText}>Luego podrás activar y desactivar la VPN.</Text>
      </View>

      <PrimaryButton title="Continuar" onPress={() => navigation.navigate('UsageMode')} />
    </ScrollView>
  </View>
);

// 7. Modo de uso
const UsageModeScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
    <ScreenTitle text="Modo de uso" />
    <IconCircle icon={<CheckCircle2 size={50} color="#fff" />} size={80} />
    <View style={styles.contentCenter}>
      <Text style={styles.subtitle}>Elegí cómo querés que funcione la protección en la familia.</Text>
      <TouchableOpacity style={styles.modeCard} onPress={() => navigation.navigate('AddDevice')}>
        <View style={styles.modeIcon}><Users size={20} color="#fff" /></View>
        <View style={{ flex: 1 }}>
          <Text style={styles.modeTitle}>Modo Responsable</Text>
          <Text style={styles.modeDesc}>Ves los dispositivos propios pero no podés ver el historial de navegación.</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.modeCard} onPress={() => navigation.navigate('AddDevice')}>
        <View style={styles.modeIcon}><User size={20} color="#fff" /></View>
        <View style={{ flex: 1 }}>
          <Text style={styles.modeTitle}>Modo Protegido</Text>
          <Text style={styles.modeDesc}>Ves los dispositivos del menor y podés ver los sitios ingresados.</Text>
        </View>
      </TouchableOpacity>

      <PrimaryButton title="Continuar" onPress={() => navigation.navigate('AddDevice')} />
    </View>
  </View>
);

// 8. Agregar dispositivos protegidos
const AddDeviceScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
    <ScreenTitle text="Agregar dispositivos protegidos" />
    <IconCircle icon={<Smartphone size={50} color="#fff" />} size={80} />
    <View style={styles.contentCenter}>
      <Text style={styles.description}>Seleccioná el dispositivo que querés proteger y vincular a uno nuevo.</Text>
      <TouchableOpacity style={styles.deviceBtn}><Text style={styles.deviceBtnText}>Celular</Text></TouchableOpacity>
      <TouchableOpacity style={styles.deviceBtn}><Text style={styles.deviceBtnText}>Tablet</Text></TouchableOpacity>
      <TouchableOpacity style={styles.deviceBtn}><Text style={styles.deviceBtnText}>Notebook</Text></TouchableOpacity>

      <PrimaryButton title="Continuar" onPress={() => navigation.navigate('ConfigureAccess')} />
    </View>
  </View>
);

// 9. Configurar tu acceso
const ConfigureAccessScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
    <ScreenTitle text="Configurá tu acceso" />
    <IconCircle icon={<Lock size={50} color="#fff" />} size={80} />
    <View style={styles.contentCenter}>
      <CustomInput placeholder="4F82-9K" />
      <PrimaryButton title="Continuar" onPress={() => navigation.navigate('LinkDevice')} />
    </View>
  </View>
);

// 10. Vincular dispositivo
const LinkDeviceScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
    <ScreenTitle text="Vincular dispositivos" />
    <IconCircle icon={<RefreshCw size={50} color="#fff" />} size={80} />
    <View style={styles.contentCenter}>
      <Text style={styles.description}>Ingresá el código que te compartió tu responsable.</Text>
      <CustomInput placeholder="4F82-9K" />
      <PrimaryButton title="Continuar" onPress={() => navigation.navigate('Linked')} />
    </View>
  </View>
);

// 11. Dispositivo Vinculado
const LinkedScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
    <ScreenTitle text="Dispositivo vinculado" />
    <IconCircle icon={<CheckCircle2 size={90} color="#00C851" />} bg="#E8F5E9" size={100} />
    <View style={styles.contentCenter}>
      <Text style={styles.description}>Ahora este equipo está protegido y gestionado por tu responsable.</Text>
      <PrimaryButton title="Continuar" onPress={() => navigation.navigate('ConfigProtection')} />
    </View>
  </View>
);

// 12. Configurar protección
const ConfigProtectionScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
    <ScreenTitle text="Configurar protección" />
    <IconCircle icon={<Shield size={50} color="#fff" />} size={80} />
    <View style={styles.contentCenter}>
      <Text style={styles.description}>Elegí qué querés bloquear en este dispositivo.</Text>
      <View style={styles.checkRow}>
        <View style={[styles.checkBoxActive, { backgroundColor: '#00B4D8', borderRadius: 10, padding: 10, marginRight: 15 }]}><Shield size={25} color="#fff" /></View>
        <View>
          <Text style={styles.checkTitle}>Sitios de Apuestas</Text>
          <Text style={styles.checkDesc}>Bloqueo de sitios, juegos y apps de apuestas.</Text>
        </View>
      </View>
      <View style={styles.checkRow}>
        <View style={[styles.checkBoxInactive, { backgroundColor: '#E0F7FA', borderRadius: 10, padding: 10, marginRight: 15 }]}><Shield size={25} color="#00B4D8" /></View>
        <View>
          <Text style={styles.checkTitle}>Sitios de información (Opcional)</Text>
        </View>
      </View>
      <PrimaryButton title="Siguiente" onPress={() => navigation.navigate('Summary')} />
    </View>
  </View>
);

// 13. Resumen de Configuración
const SummaryScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
    <ScreenTitle text="Resúmen de configuracion de protección" />
    <IconCircle icon={<Settings size={50} color="#fff" />} size={80} />
    <View style={styles.contentCenter}>
      
      <View style={{ width: '100%', marginVertical: 20 }}>
        <Text style={styles.listItem}>• Sitios de apuestas bloqueados</Text>
        <Text style={styles.listItem}>• Sitios de información (opcional)</Text>
        <Text style={styles.subTitleSmall}>Permisos</Text>
        <Text style={styles.listItem}>• Administrador del dispositivo</Text>
        <Text style={styles.listItem}>• VPN Local</Text>
        <Text style={styles.subTitleSmall}>Condiciones</Text>
        <Text style={styles.listItem}>• Términos y condiciones</Text>
        <Text style={styles.listItem}>• Política de Privacidad</Text>
      </View>

      <PrimaryButton title="Activar protección" onPress={() => navigation.navigate('Activating')} />
    </View>
  </View>
);

// 14. Activando Protección
const ActivatingScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
    <ScreenTitle text='Activando Protección' />
    <IconCircle icon={<RefreshCw size={50} color="#fff" />} size={80} />
    <View style={styles.contentCenter}>
      <View style={{ flexDirection: 'row', gap: 20, marginVertical: 20 }}>
        <CheckCircle2 size={40} color="#00C851" />
        <AlertTriangle size={40} color="#FFBB33" />
        <XCircle size={40} color="#FF4444" />
      </View>

      <Text style={styles.subtitle}>Esto puede tardar unos minutos</Text>
      <Text style={styles.subtitle}>No cierres la App</Text>
      
      <View style={styles.progressBarBg}>
        <View style={styles.progressBarFill} />
      </View>

      <PrimaryButton title="Continuar" onPress={() => navigation.navigate('ResponsibleMode')} />
    </View>
  </View>
);

// 15. Modo Responsable (Dashboard)
const ResponsibleModeScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
    <ScreenTitle text='Modo responsable' />
    <IconCircle icon={<Users size={50} color="#fff" />} size={80} />
    <View style={styles.contentCenter}>
      <Text style={styles.description}>Desde este Panel podés gestionar tus dispositivos protegidos y la configuración de la app.</Text>
      
      <TouchableOpacity style={styles.menuCard}>
        <ShieldCheck size={24} color="#fff" />
        <Text style={styles.menuText}>Dispositivo protegido</Text>
        <ArrowRight size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuCard}>
        <Activity size={24} color="#fff" />
        <Text style={styles.menuText}>Eventos y actividad</Text>
        <ArrowRight size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuCard}>
        <Bell size={24} color="#fff" />
        <Text style={styles.menuText}>Alertas, notificaciones y avisos</Text>
        <ArrowRight size={20} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuCard}>
        <Settings size={24} color="#fff" />
        <Text style={styles.menuText}>Configuración de cuenta y preferencias</Text>
        <ArrowRight size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  </View>
);

// 16. Protección Interrumpida
const InterruptedScreen = ({ navigation }: any) => (
  <View style={styles.container}>
    <Header />
    <ScreenTitle text='Protección interrumpida' />
    <View style={styles.contentCenter}>
      <IconCircle icon={<Shield size={50} color="#fff" />} size={80} />
      <Text style={styles.description}>El bloqueo de sitios de apuestas no está activo porque la VPN local se desconectó.</Text>
      <View style={styles.warningCard}>
        <AlertTriangle size={20} color="#999" />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>VPN local de BAProtege</Text>
          <Text style={{ color: '#999' }}>Desconectada</Text>
        </View>
      </View>

      <Text style={styles.subtitle}>Volvé a activar el bloqueo</Text>
      <Text style={styles.description}>Tocá «Reactivar VPN». Si Android te pide permiso para la conexión VPN, elegí «Aceptar».</Text>
      
      <PrimaryButton title="Reactivar VPN" onPress={() => {}} disabled />
      
      <TouchableOpacity style={{ marginTop: 20 }}>
        <Text style={{ color: '#0077B6', fontWeight: 'bold' }}>Abrir ajustes de VPN ↗</Text>
      </TouchableOpacity>
    </View>
  </View>
);

// ==========================================
// NAVEGACIÓN PRINCIPAL
// ==========================================

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="ConfirmAccount" component={ConfirmAccountScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Recover" component={RecoverScreen} />
          <Stack.Screen name="Activate" component={ActivateScreen} />
          <Stack.Screen name="UsageMode" component={UsageModeScreen} />
          <Stack.Screen name="AddDevice" component={AddDeviceScreen} />
          <Stack.Screen name="ConfigureAccess" component={ConfigureAccessScreen} />
          <Stack.Screen name="LinkDevice" component={LinkDeviceScreen} />
          <Stack.Screen name="Linked" component={LinkedScreen} />
          <Stack.Screen name="ConfigProtection" component={ConfigProtectionScreen} />
          <Stack.Screen name="Summary" component={SummaryScreen} />
          <Stack.Screen name="Activating" component={ActivatingScreen} />
          <Stack.Screen name="ResponsibleMode" component={ResponsibleModeScreen} />
          <Stack.Screen name="Interrupted" component={InterruptedScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

// ==========================================
// ESTILOS
// ==========================================

const ScreenTitle = ({ text }: { text: string }) => (
  <Text style={styles.screenTitle}>{text}</Text>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { backgroundColor: '#0060CC', paddingTop: 50, paddingBottom: 20, alignItems: 'center' },
  headerText: { color: '#fff', fontSize: 40, fontWeight: 'bold' },
  content: { padding: 20, alignItems: 'center', paddingBottom: 40 },
  contentCenter: { padding: 20, alignItems: 'center', justifyContent: 'center', flex: 1 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#4B4B4B', textAlign: 'center', marginBottom: 15, fontFamily: 'Archivo Narrow'  },
  subtitle: { fontSize: 20, fontWeight: '800', color: '#4B4B4B', textAlign: 'center', marginVertical: 10 },
  description: { fontSize: 14, color: '#666', textAlign: 'center', marginBottom: 20, lineHeight: 20 },
  btn: { width: '100%', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  btnSolid: { backgroundColor: '#0060CC' },
  btnOutline: { backgroundColor: 'transparent', borderWidth: 2, borderColor: '#0060CC' },
  btnText: { fontSize: 16, fontWeight: 'bold' },
  btnTextSolid: { color: '#fff' },
  btnTextOutline: { color: '#0060CC' },
  inputContainer: { width: '100%', backgroundColor: '#F5F5F5', borderRadius: 8, flexDirection: 'row', alignItems: 'center', marginBottom: 15, paddingHorizontal: 15, borderWidth: 1, borderColor: '#E0E0E0' },
  input: { flex: 1, paddingVertical: 15, color: '#4B4B4B' },
  inputIcon: { padding: 5 },
  iconCircle: { alignItems: 'center', justifyContent: 'center', marginVertical: 15, padding: 35},
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 20, marginTop: 10 },
  checkbox: { width: 20, height: 20, borderWidth: 1, borderColor: '#999', borderRadius: 4, marginRight: 10 },
  checkboxText: { color: '#666', fontSize: 14 },
  linkText: { color: '#0077B6', fontSize: 14, textAlign: 'right', width: '100%', marginBottom: 20 },
  infoCard: { width: '100%', backgroundColor: '#F8F9FA', padding: 15, borderRadius: 10, marginBottom: 15, borderWidth: 1, borderColor: '#E0E0E0' },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 },
  infoTitle: { fontWeight: 'bold', color: '#4B4B4B' },
  infoText: { fontSize: 12, color: '#666' },
  vpnSwitch: { width: 40, height: 20, backgroundColor: '#00B4D8', borderRadius: 10 },
  modeCard: { width: '100%', flexDirection: 'row', backgroundColor: '#F0F8FF', padding: 15, borderRadius: 10, marginBottom: 15, alignItems: 'center', borderWidth: 1, borderColor: '#E0F7FA' },
  modeIcon: { backgroundColor: '#00B4D8', padding: 10, borderRadius: 20, marginRight: 15 },
  modeTitle: { fontWeight: 'bold', color: '#0060CC', fontSize: 16 },
  modeDesc: { fontSize: 12, color: '#666', marginTop: 4 },
  deviceBtn: { width: '100%', padding: 15, backgroundColor: '#fff', borderWidth: 1, borderColor: '#0060CC', borderRadius: 8, marginBottom: 10, alignItems: 'center' },
  deviceBtnText: { color: '#0060CC', fontWeight: 'bold' },
  checkRow: { width: '100%', flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  checkTitle: { fontWeight: 'bold', color: '#4B4B4B' },
  checkDesc: { fontSize: 12, color: '#666' },
  listItem: { fontSize: 14, color: '#4B4B4B', marginBottom: 5 },
  subTitleSmall: { fontSize: 16, fontWeight: 'bold', color: '#4B4B4B', marginTop: 15, marginBottom: 10 },
  progressBarBg: { width: '100%', height: 10, backgroundColor: '#E0E0E0', borderRadius: 5, marginVertical: 20 },
  progressBarFill: { width: '60%', height: 10, backgroundColor: '#0060CC', borderRadius: 5 },
  menuCard: { width: '100%', backgroundColor: '#8CB4E3', flexDirection: 'row', padding: 15, borderRadius: 10, marginBottom: 10, alignItems: 'center' },
  menuText: { flex: 1, color: '#fff', fontWeight: 'bold', marginLeft: 15 },
  warningCard: { width: '100%', flexDirection: 'row', backgroundColor: '#F5F5F5', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#E0E0E0', alignItems: 'center', marginBottom: 20 },
  screenTitle: {fontSize: 30, fontWeight: 'bold', color: '#333', textAlign: 'center', marginTop: 30,}, // <-- Ajustá este valor si querés más o menos espacio desde el Header azulmarginBottom: 20,paddingHorizontal: 20,},
});