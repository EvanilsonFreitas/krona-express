"use client";

import Link from "next/link";
import { DeliveryTruck01Icon, Search01Icon, Call02Icon } from "hugeicons-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "motion/react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { detailedQuoteSchema, trackerSchema, DetailedQuoteFormValues, TrackerFormValues } from "@/lib/validations";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export function QuoteTrackerSection() {
  const quoteForm = useForm<DetailedQuoteFormValues>({
    resolver: zodResolver(detailedQuoteSchema),
    defaultValues: {
      origem: "",
      destino: "",
      tipo_operacao: "",
      peso: "",
      valor_nf: "",
      nome: "",
      contato: "",
      observacoes: "",
    },
  });

  const trackerForm = useForm<TrackerFormValues>({
    resolver: zodResolver(trackerSchema),
    defaultValues: {
      cnpj: "",
      nota: "",
    },
  });

  function onQuoteSubmit(data: DetailedQuoteFormValues) {
    console.log("Detailed Quote Form Data:", data);
    alert("Cotação expressa enviada com sucesso! Aguarde nosso retorno.");
    quoteForm.reset();
  }

  function onTrackerSubmit(data: TrackerFormValues) {
    console.log("Tracker Form Data:", data);
    alert("Consulta recebida. Sua carga está em trânsito! (Demonstração)");
    trackerForm.reset();
  }

  return (
    <section id="cotacao" className="w-full py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="text-center space-y-4 mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Central de Atendimento ao Cliente
          </h2>
          <p className="text-muted-foreground text-lg">
            Solicite uma cotação expressa ou consulte o status da sua mercadoria.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Tabs defaultValue="cotacao" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 !h-[60px] bg-slate-100 dark:bg-slate-800/50 p-1.5 rounded-2xl">
              <TabsTrigger
                value="cotacao"
                className="flex items-center justify-center gap-2 text-base font-bold h-full text-slate-500 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:text-[#114092] dark:data-[state=active]:text-white transition-all rounded-xl data-[state=active]:shadow-sm"
              >
                <DeliveryTruck01Icon className="w-5 h-5" />
                Simular Cotação de Frete
              </TabsTrigger>
              <TabsTrigger
                value="rastreamento"
                className="flex items-center justify-center gap-2 text-base font-bold h-full text-slate-500 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-900 data-[state=active]:text-[#114092] dark:data-[state=active]:text-white transition-all rounded-xl data-[state=active]:shadow-sm"
              >
                <Search01Icon className="w-5 h-5" />
                Rastrear Carga / Pedido
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cotacao" className="focus-visible:outline-none focus-visible:ring-0">
              <Card className="shadow-lg border-border/50 !p-0 overflow-hidden">
                <CardHeader className="bg-slate-50 dark:bg-slate-900 border-b p-6">
                  <CardTitle className="text-2xl text-foreground">Solicite sua Cotação</CardTitle>
                  <CardDescription className="text-base">
                    Preencha os dados abaixo. Nossa equipe comercial responderá com a proposta.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-6">
                  <Form {...quoteForm}>
                    <form className="space-y-6" onSubmit={quoteForm.handleSubmit(onQuoteSubmit)}>
                      {/* Row 1 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={quoteForm.control}
                          name="origem"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-foreground/80">Origem (Cidade/UF ou CEP) <span className="text-red-500 ml-1">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="Ex: São Paulo, SP ou 01000-000" className="h-11" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={quoteForm.control}
                          name="destino"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-foreground/80">Destino (Cidade/UF ou CEP) <span className="text-red-500 ml-1">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="Ex: Rio de Janeiro, RJ ou 20000-000" className="h-11" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Row 2 */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FormField
                          control={quoteForm.control}
                          name="tipo_operacao"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-foreground/80">Tipo de Operação <span className="text-red-500 ml-1">*</span></FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="h-11">
                                    <SelectValue placeholder="Selecione..." />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="lotacao">Carga Lotação</SelectItem>
                                  <SelectItem value="fracionada">Carga Fracionada</SelectItem>
                                  <SelectItem value="dedicada">Operação Dedicada</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={quoteForm.control}
                          name="peso"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-foreground/80">Peso (kg) <span className="text-red-500 ml-1">*</span></FormLabel>
                              <FormControl>
                                <Input inputMode="numeric" placeholder="Ex: 5000" className="h-11" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={quoteForm.control}
                          name="valor_nf"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-foreground/80">Valor da NF (R$) <span className="text-red-500 ml-1">*</span></FormLabel>
                              <FormControl>
                                <Input inputMode="numeric" placeholder="Ex: 15000.00" className="h-11" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Row 3 */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={quoteForm.control}
                          name="nome"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-foreground/80">Nome / Empresa <span className="text-red-500 ml-1">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="Seu nome ou Razão Social" className="h-11" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={quoteForm.control}
                          name="contato"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-foreground/80">Telefone / WhatsApp <span className="text-red-500 ml-1">*</span></FormLabel>
                              <FormControl>
                                <Input type="tel" inputMode="numeric" placeholder="(00) 00000-0000" className="h-11" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Row 4 */}
                      <FormField
                        control={quoteForm.control}
                        name="observacoes"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold text-foreground/80">Observações / Especificações</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Dimensões, restrições de coleta, necessidade de agendamento..." className="min-h-[120px] resize-none" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="pt-8 flex flex-col items-center gap-4">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                          <Button type="submit" size="sm" className="w-full sm:w-auto h-10 px-6 text-sm font-semibold shadow-md hover:shadow-lg transition-all bg-[#111111] hover:bg-black text-white cursor-pointer">
                            <DeliveryTruck01Icon className="mr-2 w-4 h-4" /> Solicitar Cotação
                          </Button>
                          <Button asChild variant="outline" size="sm" className="w-full sm:w-auto h-10 px-6 text-sm font-semibold border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-950 cursor-pointer">
                            <Link href="https://wa.me/551140000000?text=Ol%C3%A1%21+Gostaria+de+solicitar+uma+cota%C3%A7%C3%A3o+r%C3%A1pida+de+frete+com+a+Krona+Express." target="_blank" rel="noopener noreferrer">
                              Cotação via WhatsApp
                            </Link>
                          </Button>
                        </div>
                        <span className="text-sm font-medium text-muted-foreground flex items-center gap-2 mt-2">
                          <Call02Icon className="w-4 h-4 text-primary" /> Retorno da equipe comercial em até 15 minutos.
                        </span>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rastreamento" className="focus-visible:outline-none focus-visible:ring-0">
              <Card id="rastreamento" className="shadow-lg border-border/50 !p-0 overflow-hidden">
                <CardHeader className="bg-slate-50 dark:bg-slate-900 border-b p-6">
                  <CardTitle className="text-2xl text-foreground">Consultar Status da Carga</CardTitle>
                  <CardDescription className="text-base">
                    Acompanhe sua mercadoria informando os dados fiscais.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-6 space-y-8">
                  <Form {...trackerForm}>
                    <form className="space-y-6" onSubmit={trackerForm.handleSubmit(onTrackerSubmit)}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={trackerForm.control}
                          name="cnpj"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-foreground/80">CNPJ (Embarcador ou Pagador) <span className="text-red-500 ml-1">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="00.000.000/0000-00" className="h-11" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={trackerForm.control}
                          name="nota"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm font-semibold text-foreground/80">Número da NF ou CT-e <span className="text-red-500 ml-1">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="Ex: 12345" className="h-11" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="flex justify-start pt-2">
                        <Button type="submit" size="lg" className="w-full md:w-auto h-12 px-8 font-bold cursor-pointer">
                          <Search01Icon className="mr-2 w-5 h-5" /> Consultar Status do Frete
                        </Button>
                      </div>
                    </form>
                  </Form>

                  <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-border/50 text-sm text-muted-foreground">
                    <h4 className="font-bold text-foreground text-base mb-3 flex items-center gap-2">
                      <Call02Icon className="w-5 h-5 text-primary" /> Atendimento Personalizado
                    </h4>
                    <p className="leading-relaxed text-sm">
                      Para dúvidas sobre rastreamento ou necessidades emergenciais de rota, nosso SAC está operando 24 horas via WhatsApp e telefonia central: <strong className="text-foreground">(11) 4000-0000</strong>. Tenha em mãos a chave de acesso da NF-e para agilizar o atendimento.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
