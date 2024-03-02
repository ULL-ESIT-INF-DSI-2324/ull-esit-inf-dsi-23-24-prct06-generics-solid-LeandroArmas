/**
 * Interfaz para el servicio de notificación.
 */
interface NotificationService {
  /**
   * Notifica un mensaje.
   * @param message El mensaje a notificar.
   */
  notify(message: string): void;
}

/**
 * Clase que permite enviar notificaciones por correo electrónico.
 */
export class EmailService implements NotificationService {
  /**
   * Notifica un mensaje por correo electrónico.
   * @param message El mensaje a notificar.
   */
  notify(message: string): void {
    console.log(`Enviando notificación por correo electrónico: ${message}`);
  }
}

/**
 * Clase que permite enviar notificaciones por SMS.
 */
export class ShortMessageService implements NotificationService {
  /**
   * Notifica un mensaje por SMS.
   * @param message El mensaje a notificar.
   */
  notify(message: string): void {
    console.log(`Enviando notificación por SMS: ${message}`);
  }
}

/**
 * Clase que utiliza diferentes tipos de servicios para realizar notificaciones.
 */
export class Notifier {
  /**
   * Crea una instancia de Notifier.
   * @param notificationService El servicio de notificación a utilizar.
   */
  constructor(private notificationService: NotificationService) {
  }

  /**
   * Envía una notificación.
   * @param message El mensaje a notificar.
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Código cliente
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('¡Hola Mundo!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('¡Hola Mundo!');
