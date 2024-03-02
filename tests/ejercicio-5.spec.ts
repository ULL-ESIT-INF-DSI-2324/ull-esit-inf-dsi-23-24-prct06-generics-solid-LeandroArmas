import { expect } from 'chai';
import { EmailService, ShortMessageService, Notifier } from '../src/ejercicio-5'; // Ajusta la importación según sea necesario

// Stubbing para capturar la salida de console.log
let consoleOutput: string[] = [];
const stubConsoleLog = (message: string) => {
  consoleOutput.push(message);
};

describe('EmailService', () => {
  beforeEach(() => {
    consoleOutput = [];
  });

  it('should send email correctly', () => {
    const emailService = new EmailService();
    // Stub console.log
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any; // Forzamos el tipo por ahora
    emailService.notify('Test message');
    console.log = originalConsoleLog; // Restauramos console.log
    // Verificamos que la salida sea correcta
    expect(consoleOutput).to.deep.equal(['Enviando notificación por correo electrónico: Test message']);
  });
});

describe('ShortMessageService', () => {
  beforeEach(() => {
    consoleOutput = [];
  });

  it('should send SMS correctly', () => {
    const shortMessageService = new ShortMessageService();
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any;
    shortMessageService.notify('Test message');
    console.log = originalConsoleLog;
    expect(consoleOutput).to.deep.equal(['Enviando notificación por SMS: Test message']);
  });
});

describe('Notifier', () => {
  beforeEach(() => {
    consoleOutput = [];
  });

  it('should send notification using EmailService', () => {
    const emailService = new EmailService();
    const notifier = new Notifier(emailService);
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any;
    notifier.sendNotification('Test message');
    console.log = originalConsoleLog;
    expect(consoleOutput).to.deep.equal(['Enviando notificación por correo electrónico: Test message']);
  });

  it('should send notification using ShortMessageService', () => {
    const shortMessageService = new ShortMessageService();
    const notifier = new Notifier(shortMessageService);
    const originalConsoleLog = console.log;
    console.log = stubConsoleLog as any;
    notifier.sendNotification('Test message');
    console.log = originalConsoleLog;
    expect(consoleOutput).to.deep.equal(['Enviando notificación por SMS: Test message']);
  });
});
