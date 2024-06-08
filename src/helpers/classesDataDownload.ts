function downloadClassesData(content: string, filename: string): void {
  const blob = new Blob([content], { type: "application/octet-stream" });

  // Cria um link temporário para download
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click(); // Simula o clique no link para iniciar o download
  document.body.removeChild(link); // Remove o link após o download

  // Libera o objeto URL
  URL.revokeObjectURL(url);
}

export default downloadClassesData;
