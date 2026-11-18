document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#support-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const subject = encodeURIComponent("Contato pelo site — " + data.get("assunto"));
    const body = encodeURIComponent(
      "Nome: " + data.get("nome") + "\n" +
      "E-mail: " + data.get("email") + "\n\n" +
      "Mensagem:\n" + data.get("mensagem")
    );
    const feedback = document.querySelector("#form-feedback");
    feedback.textContent = "Abrindo seu aplicativo de e-mail para concluir o envio.";
    window.location.href = "mailto:contato@exemplo.com?subject=" + subject + "&body=" + body;
  });
});