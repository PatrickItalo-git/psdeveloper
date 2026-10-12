import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { IconInstagram } from '../components/Icons.jsx';
import { contact, whatsappLink } from '../data/site.js';

const fields = [
  { name: 'nome', label: 'Nome completo', type: 'text', required: true },
  { name: 'email', label: 'E-mail', type: 'email', required: true },
  { name: 'telefone', label: 'Telefone / WhatsApp', type: 'tel' },
];

const ContactPage = () => {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // No backend: the form composes a WhatsApp message with everything the visitor typed.
  const submit = (e) => {
    e.preventDefault();
    const lines = [`Olá Patrick! Meu nome é ${form.nome}.`, `E-mail: ${form.email}`];
    if (form.telefone) lines.push(`Telefone: ${form.telefone}`);
    lines.push('', form.mensagem);
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener');
  };

  return (
    <main>
      <header className="page-head">
        <h1 className="page-title reveal">Contato</h1>
      </header>

      <section className="container contact-grid" style={{ paddingBottom: '120px' }}>
        <div className="reveal">
          <h2 className="contact-title">Vamos conversar</h2>
          <p className="muted" style={{ maxWidth: '430px', marginBottom: '3rem', lineHeight: 1.85 }}>
            Tem um projeto em mente? Entre em contato para conversarmos sobre como transformar a sua ideia em um site ou sistema que funcione de verdade.
          </p>
          <ul className="contact-list">
            <li><IconInstagram /><a href={contact.instagram.url} target="_blank" rel="noreferrer">{contact.instagram.handle}</a></li>
            <li><Phone size={18} strokeWidth={1.5} /><a href={whatsappLink()} target="_blank" rel="noreferrer">{contact.phoneLabel}</a></li>
            <li><Mail size={18} strokeWidth={1.5} /><a href={`mailto:${contact.email}`}>{contact.email.toUpperCase()}</a></li>
            <li><MapPin size={18} strokeWidth={1.5} /><span>{contact.city}</span></li>
          </ul>
        </div>

        <form className="contact-form reveal" onSubmit={submit}>
          {fields.map((f) => (
            <label key={f.name}>
              <span>{f.label}</span>
              <input name={f.name} type={f.type} required={f.required} value={form[f.name]} onChange={update} />
            </label>
          ))}
          <label>
            <span>Mensagem ou detalhes do projeto</span>
            <textarea name="mensagem" rows={4} required value={form.mensagem} onChange={update} />
          </label>
          <button type="submit" className="btn-solid">Enviar mensagem</button>
          <p className="muted" style={{ fontSize: '0.8rem', textAlign: 'center' }}>A mensagem abre no WhatsApp, pronta para enviar.</p>
        </form>
      </section>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; max-width: 1140px; }
        .contact-title { font-weight: 400; font-size: 1.25rem; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 1.5rem; }
        .contact-list { list-style: none; display: flex; flex-direction: column; gap: 1.5rem; }
        .contact-list li { display: flex; align-items: center; gap: 1rem; }
        .contact-list svg { flex-shrink: 0; color: var(--ink-soft); }
        .contact-list a:hover { color: var(--blue); }
        .contact-form { display: flex; flex-direction: column; gap: 2.25rem; }
        .contact-form label span { display: block; font-size: 0.75rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--ink-soft); margin-bottom: 0.5rem; }
        .contact-form input, .contact-form textarea { width: 100%; border: none; border-bottom: 1px solid var(--line); background: transparent; padding: 0.6rem 0; font-size: 1rem; color: var(--ink); outline: none; resize: vertical; transition: border-color 0.3s; }
        .contact-form input:focus, .contact-form textarea:focus { border-color: var(--blue); }
        @media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr; gap: 4rem; } }
      `}</style>
    </main>
  );
};

export default ContactPage;
