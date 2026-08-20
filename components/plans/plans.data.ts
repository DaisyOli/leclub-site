import {
  AssessmentIcon,
  ClinicalCareIcon,
  LeClubExperienceIcon,
  RecoveryIcon,
} from "../icons/PlanIcons";

export const planBenefits = [
  {
    number: "01",
    title: "Cuidado clínico",
    Icon: ClinicalCareIcon,
    items: [
      "Consulta com médico generalista",
      "Consulta com médico com especialização em esporte",
      "Consulta com nutricionista",
      "Calorimetria indireta",
    ],
  },
  {
    number: "02",
    title: "Avaliações e acompanhamento",
    Icon: AssessmentIcon,
    items: [
      "Avaliação física completa com coordenador técnico",
      "Avaliação física simples trimestral",
      "Avaliação na bioimpedância trimestral",
      "Treino personalizado",
    ],
  },
  {
    number: "03",
    title: "Experiência LeCLUB",
    Icon: LeClubExperienceIcon,
    items: [
      "Camisa personalizada",
      "Garrafa personalizada",
      "Serviço de toalha de rosto",
      "Um professor para atender até 4 alunos, sem hora marcada",
    ],
  },
  {
    number: "04",
    title: "Recuperação e bem-estar",
    Icon: RecoveryIcon,
    items: [
      "Acesso à banheira de gelo",
      "Acesso à bota de compressão pneumática",
      "Acesso à cadeira de massagem",
    ],
  },
];

export const annualPlan = {
  eyebrow: "Pré-venda plano anual",
  description:
    "Acesso à estrutura LeCLUB com acompanhamento técnico, avaliações periódicas, recursos de recuperação e benefícios exclusivos.",
  referencePrice: "R$ 1.100",
  presalePrice: "R$ 973",
  enrollmentFee: "+ taxa de matrícula de R$ 450",
  condition: "Condição especial de inauguração",
  ctaLabel: "Participar da pré-venda",
  ctaHref: "https://wa.me/5500000000000",
  footerText:
    "Capacidade limitada para preservar a qualidade do acompanhamento e da experiência",
};