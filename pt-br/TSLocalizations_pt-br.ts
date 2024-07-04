import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_pt_br {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string, guildId: string): string {
                return `O prazo da tarefa **${id}** é ${deadline} no servidor [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_notification(guildName: string, guildId: string): string {
                return `Você foi designado para uma nova tarefa no servidor [${guildName}](https://discord.com/channels/${guildId})`;
            },
            assigned_embed_title(id: string): string {
                return `Tarefa ${id} atribuída`;
            },
            assigned_embed_footer: "Essas notificações podem ser desativadas por um administrador do servidor usando o comando \"/preferences direct_messages\"",
            assigned_embed_button_in_progress: "Marcar como em andamento",
            assigned_embed_button_done: "Marcar como concluída",
            deadline_was_in_past(id: string, guildName: string, guildId: string): string {
                return `A tarefa ${id} está com o prazo vencido no servidor [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification(guildName: string, guildId: string): string {
                return `Uma tarefa à qual você foi designado foi repetida e precisa ser concluída no servidor [${guildName}](https://discord.com/channels/${guildId})`;
            },
            repeat_notification_embed_title(id: string): string {
                return `Tarefa ${id} repetida`;
            },
            deadline_alert: "Alerta de prazo",
            commented_embed_title(id: string): string {
                return `Novo comentário na tarefa ${id}`;
            },
            commented_notification(guildName: string, guildId: string, author: string, commentText: string): string {
                return `Um comentário foi adicionado à uma tarefa no servidor [${guildName}](https://discord.com/channels/${guildId}) por ${author}: ${commentText}`;
            }
        },
        webhookLogging: {
            id_field: "ID",
            deadline_field: "Prazo",
            assignees_field: "Atribuídos",
            status_field: "Estado",
            subtasks_field: "Subtarefas",
            delete_at_field: "Excluir em",
            text_field: "Texto",
            project_field: "Projeto",
            role_field: "Função",
            permission_field: "Permissão",
            user_field: "Usuário",
            preset_field: "Predefinição",
            priority_field: "Prioridade",
            label_field: "Etiqueta",
            personal_field: "Pessoal",
            manager_field: "Gerente",
            repeat_interval_field: "Intervalo de repetição (dias)",
            repeat_end_date_field: "Data de término da repetição",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "A fazer";
                    case 1:
                        return "Em andamento";
                    case 2:
                        return "Concluído";
                    default:
                        return "Desconhecido";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `Prazo da tarefa ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `O prazo da tarefa **${id}** é ${deadline}`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `Tarefa ${id} excluída`;
                },
                description(id: string): string {
                    return `A tarefa ${id} foi removida da lixeira.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `Tarefa ${id} repetida`;
                },
                description(id: string): string {
                    return `A tarefa ${id} foi repetida e o status foi redefinido.`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `Tarefa ${id} criada`;
                },
                description(task_text: string, id: string): string {
                    return `A tarefa ${id} foi criada com o texto: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `Tarefa ${id} atualizada`;
                },
                description(id: string): string {
                    return `A tarefa ${id} foi atualizada e as seguintes informações foram alteradas.`;
                }
            },
            project_created: {
                title: "Projeto criado",
                description(projectName: string): string {
                    return `O projeto ${projectName} foi criado.`;
                }
            },
            project_deleted: {
                title: "Projeto excluído",
                description(projectName: string): string {
                    return `O projeto ${projectName} foi excluído.`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `Status da tarefa ${id} alterado`;
                }
            },
            permission_granted: {
                title: "Permissão concedida",
            },
            permission_revoked: {
                title: "Permissão revogada",
            },
            preset_applied: {
                title: "Predefinição aplicada",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `Prazo da tarefa ${id} vencido`;
                }
            },
            project_updated: {
                title: "Projeto atualizado",
                description(name: string): string {
                    return `O projeto ${name} foi atualizado.`;
                }
            },
            test_message: {
                title: "Mensagem de teste",
                description: "Se você está vendo esta mensagem, o webhook está funcionando corretamente e o log está ativo."
            },
            comment_added: {
                title(id: string): string {
                    return `Comentário adicionado à tarefa ${id}`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `Comentário excluído da tarefa ${id}`;
                }
            }
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, guildId: string, startTime: string): string {
                return `O próximo evento (${id}: ${name}) começará em ${durationTillEventMinutes} minutos no servidor [${guildName}](https://discord.com/channels/${guildId}).`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string): string {
                    return `Você foi convidado para o evento ${eventName} por <@${inviterId}>. O evento ocorrerá de ${start} a ${end}`;
                },
                accept_button: "Aceitar",
                deny_button: "Recusar"
            }
        }
    }
}
