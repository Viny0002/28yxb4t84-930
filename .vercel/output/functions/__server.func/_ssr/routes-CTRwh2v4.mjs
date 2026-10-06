import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as FlaskConical, c as BookOpen, i as Palette, n as Quote, o as ChevronRight, r as Printer, s as ChevronLeft } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CTRwh2v4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Figure({ src, alt, caption, credit, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("overflow-hidden rounded-md bg-paper-edge", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "block h-auto w-full object-cover",
			crossOrigin: "anonymous"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "border-t border-ink/10 px-3 py-2.5 text-xs leading-snug text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium text-ink",
				children: caption
			}), credit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 block italic",
				children: credit
			}) : null]
		})]
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-sans text-[0.7rem] font-semibold tracking-[0.22em] text-scheele uppercase",
		children
	});
}
function PageHeading({ number, title, lead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "border-b border-ink/10 pb-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Kicker, { children: [
					"Pasta didática · Página ",
					number,
					" de 04"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-3xl leading-none text-scheele",
					children: number
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-2xl font-medium tracking-tight text-ink",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base",
				children: lead
			})
		]
	});
}
function Callout({ label, children, tone = "green" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("rounded-lg px-4 py-3.5 text-sm leading-relaxed", tone === "green" ? "bg-scheele text-paper" : "bg-moss text-paper"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1.5 font-sans text-[0.68rem] font-semibold tracking-[0.18em] uppercase opacity-80",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "[&_p+p]:mt-2",
			children
		})]
	});
}
function Note({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-lg border border-scheele/30 bg-scheele/8 px-4 py-3 text-sm leading-relaxed text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-1 font-sans text-[0.68rem] font-semibold tracking-[0.16em] text-scheele-deep uppercase",
			children: label
		}), children]
	});
}
function PageOrigem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				number: "01",
				title: "A origem de um verde impossível",
				lead: "Até o século XVIII, um verde vivo, barato e estável era o sonho frustrado de pintores e tintureiros. Em 1775, na Suécia, um boticário encontrou a cor — e, com ela, um veneno."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-sm leading-relaxed sm:text-base",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Carl Wilhelm Scheele (1742–1786) era um farmacêutico alemão-sueco que trabalhava em boticas de Estocolmo e, depois, de Köping. Sem laboratório universitário, descobriu o oxigênio, o cloro, o manganês, o tungstênio (na scheelita), o ácido tartárico, a glicerina — e ainda assim ficou famoso por uma cor." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Em 1775, ao estudar compostos de arsênio, misturou uma solução de arsenito de sódio com sulfato de cobre (o “vitríolo azul”). Formou-se um precipitado insolúvel, de um verde-amarelado que ninguém fabricava em escala. Os verdes antigos — terra verde, verdigris, malaquita, carbonatos de cobre — eram opacos, azulados ou desbotavam. O novo pigmento parecia grama viva sobre o papel." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Scheele não escondeu o perigo. Em 1777 avisou um colega de que o pigmento era venenoso. Em 1778 publicou o método no periódico da Academia Real Sueca de Ciências — e publicou também a toxicidade. O segredo nunca foi um segredo. A Europa simplesmente quis a cor mais do que temeu o arsênio." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/laboratorio.jpg",
					alt: "Laboratório de boticário do século XVIII, com precipitado verde se formando numa tigela.",
					caption: "Köping, por volta de 1775: o verde nasce de um precipitado.",
					credit: "Ilustração pedagógica. O boticário aparece de costas: não é um retrato de Scheele."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					[
						"1775",
						"Síntese",
						"Scheele obtém o arsenito de cobre enquanto mapeia a química do arsênio."
					],
					[
						"1777–78",
						"Aviso e receita",
						"Primeiro alerta privado; depois, publicação oficial com o método e o veneno."
					],
					[
						"c. 1780",
						"Moda europeia",
						"O pigmento entra em papéis de parede, tecidos, livros e paletas de artistas."
					]
				].map(([year, title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-ink/10 bg-paper-edge/40 px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-scheele-deep",
							children: year
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-lg text-ink",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-muted",
							children: body
						})
					]
				}, year))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/pigmento.jpg",
					alt: "Pó cristalino verde-amarelado de pigmento de Scheele sobre papel creme.",
					caption: "O tom oficialmente reproduzido hoje é o hex #478800.",
					credit: "Macro didático do pigmento: verde-amarelado, opaco, de brilho mineral."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
						label: "Por que o verde era tão difícil?",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "A clorofila das plantas morre fora da folha. Os minerais verdes naturais tendem ao azul (cobre) ou ao oliva apagado (terra). Um verde “de relva”, barato e cubriente, só aparece com a química industrial do arsênio — e dura cerca de 120 anos na moda antes de ser banido das casas." })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
						label: "Nomes da mesma cor",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Verde de Scheele, Schloss green, Swedish green, mineral green, vert de Scheele, Scheelesgrün, Pigment Green 22 (CI 77412). Não confundir com o verde esmeralda / verde de Schweinfurt / Paris green, inventado em 1814 — parente químico, ainda mais intenso, igualmente tóxico." })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
				src: "/images/still-life.jpg",
				alt: "Natureza-morta com pó verde, cristais azuis de sulfato de cobre, almofariz e frasco.",
				caption: "Os ingredientes da cor: cobre (azul), arsênio (o perigo invisível) e calor.",
				credit: "Ainda-vida pedagógica no espírito de um gabinete de química do século XVIII."
			})
		]
	});
}
function PageArte() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				number: "02",
				title: "A cor que pintou o século XIX",
				lead: "O verde de Scheele saiu da botica e entrou nos ateliês, nos salões, nos livros e nos vestidos de baile. Poucas cores tiveram uma vida social tão intensa — e tão curta."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4 text-sm leading-relaxed sm:text-base",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Artistas queriam um verde que não desbotasse como os lagos vegetais nem puxasse tanto para o azul quanto o verdigris. O arsenito de cobre entregou um amarelo-verde cubriente, barato, fácil de moer em óleo. Há um porém científico importante para o ensino médio: o pigmento original escurecia com sulfetos e poluição. Por isso, em 1814, Wilhelm Sattler e Friedrich Russ lançaram em Schweinfurt o",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						className: "font-semibold",
						children: "verde esmeralda"
					}),
					" (acetoarsenito de cobre) — mais vivo, um pouco mais estável, tão venenoso quanto."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Conservadores de museu confirmam o verde de Scheele em poucos objetos (cerca de dez casos bem documentados). Muitas vezes ele aparece misturado ao verde esmeralda. Os impressionistas e pós-impressionistas usaram sobretudo este segundo verde." })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/turner-inspirado.jpg",
					alt: "Paisagem romântica inglesa com folhagem verde-amarelada à beira de um rio.",
					caption: "J. M. W. Turner, Guildford from the Banks of the Wey, c. 1805.",
					credit: "Ilustração inspirada na obra. Análise por EDX na Tate identificou verde de Scheele neste óleo sobre madeira. Turner trocou o pigmento pelo verde esmeralda por volta dos anos 1830."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/monet-inspirado.jpg",
					alt: "Cena impressionista de banhistas num rio com verdes intensos.",
					caption: "Claude Monet, Banhistas em La Grenouillère, 1869.",
					credit: "Ilustração inspirada na obra. Monet, Cézanne, Pissarro, Gauguin e Van Gogh usaram verde esmeralda (Paris green), o sucessor direto do verde de Scheele."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
				label: "Obras e artistas para anotar",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "list-disc space-y-1.5 pl-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Turner (confirmado):"
						}), " esboço de Guildford, Tate, Londres — um dos raros casos em que o laboratório achou Scheele, não só esmeralda."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Georg Friedrich Kersting:"
						}), " interiores românticos alemães do início do séc. XIX, quando o pigmento ainda era novidade de paleta."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Impressionistas:"
						}), " verdes de arsênio nas árvores, nas águas e nas sombras — a cor “impossível” virou luz."] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Papéis de William Morris:"
						}), " a firma Morris & Co. usou verdes arsenicais em papéis de parede; Morris minimizou o risco, mesmo depois dos alertas vitorianos."] })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						src: "/images/vestido.jpg",
						alt: "Vestido de baile vitoriano de seda verde-amarelada em manequim sem cabeça.",
						caption: "A moda que adoecia.",
						credit: "Vestidos de baile, sapatos e luvas tingidos com arsenito. O pó se soltava na dança."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						src: "/images/sala-vitoriana.jpg",
						alt: "Sala vitoriana inteiramente forrada de papel de parede verde botânico.",
						caption: "A casa como câmara de gás lenta.",
						credit: "Papéis úmidos + mofo podiam liberar gases de arsênio. Crianças definhavam em quartos verdes."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						src: "/images/livros.jpg",
						alt: "Pilha de livros do século XIX com capas de tecido verde de Scheele.",
						caption: "Até a biblioteca envenenava.",
						credit: "O Poison Book Project (Universidade de Delaware) ainda encontra encadernações arsenicais em acervos."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
				label: "Não era só pintura",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "O pigmento coloriu papéis de parede, cortinas, velas, brinquedos, flores artificiais, sabonetes, naipes de baralho e, em alguns países, até doces e manjares verdes. A Escócia ficou com fama de desconfiar de guloseimas verdes — memória popular de uma época em que a cor da hortelã podia ser arsênio." })
			})
		]
	});
}
var ATOMS = {
	Cu: {
		name: "Cobre",
		z: 29,
		mass: "63,55 u",
		role: "Metal de transição que dá o tom verde-azulado típico dos sais de cobre. Aqui ele está no estado de oxidação +2 (Cu²⁺).",
		fill: "#8a5a28",
		text: "#f3ecd8"
	},
	As: {
		name: "Arsênio",
		z: 33,
		mass: "74,92 u",
		role: "Semimetal extremamente tóxico. No pigmento aparece como arsenito (AsO₃³⁻ / HAsO₃²⁻). É o responsável pelos envenenamentos.",
		fill: "#5a4a78",
		text: "#f3ecd8"
	},
	O: {
		name: "Oxigênio",
		z: 8,
		mass: "16,00 u",
		role: "Três átomos de oxigênio ligam o arsênio no ânion arsenito. Representam cerca de um quarto da massa da fórmula.",
		fill: "#8b2e2e",
		text: "#f3ecd8"
	},
	H: {
		name: "Hidrogênio",
		z: 1,
		mass: "1,01 u",
		role: "Um único hidrogênio torna a fórmula um hidrogenoarsenito de cobre (CuHAsO₃), a versão mais citada do pigmento.",
		fill: "#d7d2c4",
		text: "#16210a"
	}
};
function Molecule() {
	const [active, setActive] = (0, import_react.useState)("As");
	const info = ATOMS[active];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-ink/10 bg-paper-edge/50 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-sans text-[0.68rem] font-semibold tracking-[0.16em] text-scheele-deep uppercase",
				children: "Toque num átomo · fórmula empírica CuHAsO₃"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 grid gap-4 sm:grid-cols-[1fr_14rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					viewBox: "0 0 320 210",
					className: "h-auto w-full",
					role: "img",
					"aria-label": "Modelo simplificado de CuHAsO3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "160",
							y1: "108",
							x2: "64",
							y2: "108",
							stroke: "#16210a",
							strokeWidth: "3",
							opacity: "0.35"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "160",
							y1: "108",
							x2: "232",
							y2: "52",
							stroke: "#16210a",
							strokeWidth: "3",
							opacity: "0.35"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "160",
							y1: "108",
							x2: "248",
							y2: "148",
							stroke: "#16210a",
							strokeWidth: "3",
							opacity: "0.35"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "160",
							y1: "108",
							x2: "160",
							y2: "176",
							stroke: "#16210a",
							strokeWidth: "3",
							opacity: "0.35"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtomNode, {
							id: "Cu",
							cx: 64,
							cy: 108,
							r: 28,
							active,
							onSelect: setActive
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtomNode, {
							id: "As",
							cx: 160,
							cy: 108,
							r: 32,
							active,
							onSelect: setActive
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtomNode, {
							id: "O",
							cx: 232,
							cy: 52,
							r: 20,
							active,
							onSelect: setActive
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtomNode, {
							id: "O",
							cx: 248,
							cy: 148,
							r: 20,
							active,
							onSelect: setActive
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtomNode, {
							id: "O",
							cx: 160,
							cy: 176,
							r: 20,
							active,
							onSelect: setActive
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtomNode, {
							id: "H",
							cx: 288,
							cy: 168,
							r: 14,
							active,
							onSelect: setActive
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "264",
							y1: "156",
							x2: "278",
							y2: "166",
							stroke: "#16210a",
							strokeWidth: "2.5",
							opacity: "0.35"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-xl text-ink",
						children: [
							active,
							" · ",
							info.name
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 font-mono text-xs text-muted",
						children: [
							"Z = ",
							info.z,
							" · massa atômica ",
							info.mass
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-ink",
						children: info.role
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-xs leading-relaxed text-muted",
				children: "Modelo didático, não cristalográfico. O pigmento histórico era uma mistura de arsenitos e arseniatos de cobre; a fórmula mais citada é CuHAsO₃. Cores dos átomos seguem a convenção CPK."
			})
		]
	});
}
function AtomNode({ id, cx, cy, r, active, onSelect }) {
	const atom = ATOMS[id];
	const isOn = active === id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		role: "button",
		tabIndex: 0,
		"aria-label": `${id}, ${atom.name}`,
		className: "cursor-pointer",
		onClick: () => onSelect(id),
		onKeyDown: (e) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				onSelect(id);
			}
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx,
			cy,
			r,
			fill: atom.fill,
			stroke: isOn ? "#478800" : "rgba(22,33,10,0.35)",
			strokeWidth: isOn ? 4 : 1.5
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: cx,
			y: cy + 1,
			textAnchor: "middle",
			dominantBaseline: "middle",
			fill: atom.text,
			fontSize: id === "H" ? 11 : 14,
			fontFamily: "Figtree, sans-serif",
			fontWeight: 600,
			children: id
		})]
	});
}
function MassBars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-3",
		children: [[
			{
				id: "As",
				label: "Arsênio",
				pct: 40
			},
			{
				id: "Cu",
				label: "Cobre",
				pct: 33.9
			},
			{
				id: "O",
				label: "Oxigênio",
				pct: 25.6
			},
			{
				id: "H",
				label: "Hidrogênio",
				pct: .54
			}
		].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1 flex items-baseline justify-between text-xs",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-medium text-ink",
				children: [
					row.id,
					" · ",
					row.label
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "font-mono tabular-nums text-muted",
				children: [row.pct.toString().replace(".", ","), "%"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-2.5 overflow-hidden rounded-full bg-ink/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("h-full rounded-full bg-scheele"),
				style: { width: `${Math.max(row.pct, 3)}%` }
			})
		})] }, row.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: "Percentuais em massa para CuHAsO₃ (massa molar ≈ 187,47 g/mol). O tom do pigmento muda com a razão cobre/arsênio e com a temperatura de secagem."
		})]
	});
}
function PageQuimica() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				number: "03",
				title: "Composição e o corpo que adoece",
				lead: "CuHAsO₃: quatro elementos, uma cor brilhante e um manual de toxicologia. Esta página é a mais importante da pasta — leia com calma."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
				children: [
					[
						"Cu",
						"29",
						"Cobre",
						"metal, +2"
					],
					[
						"H",
						"1",
						"Hidrogênio",
						"não-metal"
					],
					[
						"As",
						"33",
						"Arsênio",
						"semimetal"
					],
					[
						"O",
						"8",
						"Oxigênio",
						"não-metal ×3"
					]
				].map(([sym, z, name, note]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-ink/10 bg-scheele px-3 py-3 text-paper",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[0.65rem] tracking-widest uppercase opacity-80",
							children: ["Z = ", z]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl leading-none",
							children: sym
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm font-medium",
							children: name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs opacity-80",
							children: note
						})
					]
				}, sym))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Molecule, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MassBars, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-lg border border-ink/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[32rem] text-left text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
							className: "sr-only",
							children: "Comparação entre verdes de arsênio e um verde moderno"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-scheele text-paper",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium",
									children: "Pigmento"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium",
									children: "Ano"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium",
									children: "Fórmula"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-medium",
									children: "Tom e risco"
								})
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
							className: "bg-paper-edge/40",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-ink/10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 font-medium",
											children: "Verde de Scheele"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2",
											children: "1775"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 font-mono text-xs",
											children: "CuHAsO₃"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2",
											children: "Verde-amarelado; escurece; tóxico"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-ink/10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 font-medium",
											children: "Verde esmeralda / Paris"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2",
											children: "1814"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 font-mono text-xs",
											children: "3Cu(AsO₂)₂·Cu(CH₃COO)₂"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2",
											children: "Mais vivo; também arsenical"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-ink/10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 font-medium",
											children: "Viridiano / ftalocianina"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2",
											children: "séc. XIX–XX"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2 font-mono text-xs",
											children: "Cr₂O₃·2H₂O / CuPc"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-2",
											children: "Verdes modernos, sem arsênio"
										})
									]
								})
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
				label: "O pigmento não era uma substância pura",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Análises recentes (Munoz et al., 2024) mostram uma mistura: meta-arsenito, ortoarsenito, arseniatos e até a forma cristalina próxima do mineral trippkeíta, Cu(AsO₂)₂. Íons livres de cobre e arsênio migram com umidade — por isso o perigo não ficava “preso” na tinta." })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-sm leading-relaxed sm:text-base",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl text-ink",
							children: "Três portas de entrada no corpo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
							className: "list-decimal space-y-2 pl-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: "Inalação."
								}), " Pó fino de flores artificiais, lixa de papel de parede, poeira de ateliê. O arsênio vai a pulmões, estômago e fígado."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: "Ingestão."
								}), " Mãos na boca, brinquedos lambidos, doces corados, pigmento em alimentos. Dose aguda pode matar."] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: "Pele e mucosas."
								}), " Vestidos, luvas, papéis. Sudorese na dança soltava o pó. Crianças em berços verdes absorviam o veneno dia após dia."] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sintomas agudos: dor abdominal, vômitos, diarreia, gosto metálico, queda de pressão, confusão. Crônicos: manchas na pele, linhas de Mees nas unhas, formigamento nos pés (neuropatia), anemia — e câncer de pele, pulmão e bexiga. O arsênio é carcinógeno humano confirmado." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/flores.jpg",
					alt: "Bancada de oficina de flores artificiais coberta de pó verde de arsênio.",
					caption: "Londres, 1861: o ofício que matou Matilda Scheurer, 19 anos.",
					credit: "Ela polvilhava folhas de seda com o pigmento. Vômitos verdes, escleróticas verdes, unhas verdes. O artigo Pretty Poison-Wreaths espalhou o caso."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
				label: "Papel de parede úmido: o gás de Gosio",
				tone: "ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"Em paredes úmidas, fungos como ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Scopulariopsis" }),
					" e ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Paecilomyces" }),
					" metabolizam o arsenito e podem liberar compostos voláteis de arsênio (o chamado gás de Gosio, 1893). Durante muito tempo acreditou-se que o trimetilarsina era o assassino invisível das casas vitorianas. Estudos posteriores mostram que esse gás específico é menos tóxico do que se pensava — o que não salva o pigmento: o pó, o contato e os íons solúveis bastam para envenenar. A lição de método científico: uma hipótese famosa (Napoleão, papéis, mofo) precisa ser separada do que está medido."
				] })
			})
		]
	});
}
var REFS = [
	"SCHEELE’S green. In: WIKIPEDIA: the free encyclopedia. Disponível em: https://en.wikipedia.org/wiki/Scheele%27s_green. Acesso em: 6 out. 2026.",
	"CAMEO. Scheele’s green. Boston: Museum of Fine Arts. Disponível em: https://cameo.mfa.org/wiki/Scheele%27s_green. Acesso em: 6 out. 2026.",
	"MUNOZ, Leonardo Pantoja et al. Hidden in plain sight: revisiting the synthesis, characterisation, degradation and the intricate relationship between Scheele’s green and Emerald green. npj Heritage Science, [s. l.], v. 12, artigo 94, 2024. DOI: https://doi.org/10.1038/s40494-024-01192-7. Disponível em: https://www.nature.com/articles/s40494-024-01192-7. Acesso em: 6 out. 2026.",
	"FIEDLER, Inge; BAYARD, Michael. Emerald Green and Scheele’s Green. In: FITZHUGH, Elisabeth West (ed.). Artists’ pigments: a handbook of their history and characteristics. v. 3. Washington: National Gallery of Art, 1997. p. 219-271.",
	"GETTENS, Rutherford J.; STOUT, George L. Painting materials: a short encyclopaedia. New York: Dover, 1966.",
	"TOWNSEND, Joyce H. The materials of J. M. W. Turner: pigments. Studies in Conservation, [s. l.], v. 38, n. 4, p. 231-254, 1993.",
	"JONES, David E. H.; LEDINGHAM, Kenneth W. D. Arsenic in Napoleon’s wallpaper. Nature, v. 299, p. 626-627, 1982. DOI: https://doi.org/10.1038/299626a0.",
	"UNIVERSITY OF DELAWARE. Poison Book Project. Disponível em: https://sites.udel.edu/poisonbookproject/. Acesso em: 6 out. 2026."
];
function PageFontes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeading, {
				number: "04",
				title: "Curiosidades, ressalvas e fontes ABNT",
				lead: "Histórias famosas, o que a ciência realmente sustenta, e a lista de referências no padrão NBR 6023 — pronta para o trabalho escolar."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1.05fr_0.95fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 text-sm leading-relaxed sm:text-base",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl text-ink",
							children: "Napoleão e o quarto verde"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"No exílio em Santa Helena (1815–1821), Napoleão viveu em Longwood House, com papéis de parede verdes — a cor predileta do imperador. Análises de mechas de cabelo (a partir de 1961, confirmadas depois) acharam arsênio muito acima do normal. Em 1982, Jones e Ledingham publicaram na ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "Nature" }),
							" que um fragmento do papel de Longwood continha arsênio em quantidade relevante."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Isso prova exposição. Não prova assassinato. A autópsia e o consenso clínico apontam câncer de estômago. Cabelos de outras fases da vida dele também têm arsênio: a substância estava em tônicos, cosméticos, conservantes e no vinho da época. O papel úmido pode ter piorado um quadro já grave — e o arsênio aumenta o risco de carcinoma gástrico. Conclusão honesta para o ensino médio: o verde provavelmente não “matou Napoleão sozinho”, mas também não era inofensivo." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/longwood.jpg",
					alt: "Interior simples de Longwood House com papel de parede listrado verde.",
					caption: "Longwood House, Santa Helena: o verde da moda no fim do império.",
					credit: "Ilustração pedagógica do quarto, sem retratos. Hipótese do papel é famosa; o diagnóstico majoritário continua sendo o câncer."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					["O descobridor avisou", "Scheele publicou a toxicidade junto com a cor. O desastre vitoriano não foi ignorância total: foi desejo + indústria + regulação lenta."],
					["Inseticida até os anos 1930", "Fora da pintura, o arsenito de cobre (e o Paris green) ainda matava ratos, fungos e insetos no século XX."],
					["A moda matou o próprio verde", "No fim da era vitoriana, o verde saiu de moda nas casas em parte porque passou a significar veneno, não primavera."],
					["Um verde que ainda existe", "Reproduções modernas usam pigmentos sem arsênio para chegar perto de #478800 ou #3C7A18. A cor sobreviveu; a fórmula, não."]
				].map(([title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-lg border border-ink/10 bg-paper-edge/40 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-lg text-ink",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-relaxed text-muted",
						children: body
					})]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Callout, {
				label: "Como citar esta pasta (ABNT)",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-normal",
					children: "VERDE de Scheele: pasta didática em quatro páginas. Material didático digital. 2026. Disponível em: [endereço da publicação]. Acesso em: 6 out. 2026."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm opacity-90",
					children: "No texto, use o sistema autor-data da NBR 10520: (Munoz et al., 2024) ou, para verbete sem autor, a primeira palavra em versal: (Scheele’s green, 2026)."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl text-ink",
					children: "Referências"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-muted",
					children: "NBR 6023:2025 · alinhadas à esquerda · ordem alfabética · acesso em 6 out. 2026"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-3 space-y-2.5",
					children: REFS.map((ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-l-2 border-scheele pl-3 text-xs leading-relaxed text-ink sm:text-sm",
						children: ref
					}, ref.slice(0, 24)))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
				label: "Glossário rápido",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Precipitado:"
					}),
					" sólido que se forma numa solução.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Arsenito / arseniato:"
					}),
					" oxiânions de arsênio III e V.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "Carcinógeno:"
					}),
					" substância capaz de causar câncer.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "EDX:"
					}),
					" espectroscopia de raios X usada para achar elementos em pinturas. ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium",
						children: "PG22:"
					}),
					" código internacional do pigmento."
				] })
			})
		]
	});
}
var PAGES = [
	{
		id: 0,
		label: "Origem",
		icon: BookOpen,
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageOrigem, {})
	},
	{
		id: 1,
		label: "Arte",
		icon: Palette,
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageArte, {})
	},
	{
		id: 2,
		label: "Química e riscos",
		icon: FlaskConical,
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageQuimica, {})
	},
	{
		id: 3,
		label: "Curiosidades e fontes",
		icon: Quote,
		node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageFontes, {})
	}
];
function FolderApp() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [page, setPage] = (0, import_react.useState)(0);
	const [dir, setDir] = (0, import_react.useState)(1);
	const sheetRef = (0, import_react.useRef)(null);
	const touchX = (0, import_react.useRef)(null);
	const go = (0, import_react.useCallback)((next) => {
		setPage((current) => {
			const clamped = Math.max(0, Math.min(PAGES.length - 1, next));
			setDir(clamped >= current ? 1 : -1);
			return clamped;
		});
	}, []);
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			if (e.key === "Escape") {
				setOpen(false);
				return;
			}
			if (!open) {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					setOpen(true);
				}
				return;
			}
			if (e.key === "ArrowRight") go(page + 1);
			if (e.key === "ArrowLeft") go(page - 1);
			if (e.key >= "1" && e.key <= "4") go(Number(e.key) - 1);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		go,
		open,
		page
	]);
	(0, import_react.useEffect)(() => {
		sheetRef.current?.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}, [page, open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "desk min-h-dvh text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#conteudo",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2",
				children: "Ir ao conteúdo"
			}),
			!open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, { onOpen: () => setOpen(true) }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("mx-auto max-w-6xl px-3 pb-10 pt-4 sm:px-6", !open && "hidden print:block"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderChrome, {
					page,
					onClose: () => setOpen(false),
					onPrint: () => window.print(),
					onGo: go,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						id: "conteudo",
						ref: sheetRef,
						className: "paper-grain max-h-[calc(100dvh-7.5rem)] overflow-y-auto rounded-[calc(var(--radius-lg)-6px)] px-4 py-6 sm:px-8 sm:py-8 print:max-h-none print:overflow-visible",
						onTouchStart: (e) => {
							touchX.current = e.changedTouches[0]?.clientX ?? null;
						},
						onTouchEnd: (e) => {
							if (touchX.current == null) return;
							const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
							touchX.current = null;
							if (dx < -56) go(page + 1);
							if (dx > 56) go(page - 1);
						},
						children: PAGES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn("print-sheet", item.id === page ? "block" : "hidden print:block", item.id === page && (dir > 0 ? "animate-in" : "animate-in")),
							style: item.id === page ? { animation: "folder-page 420ms var(--ease-out)" } : void 0,
							children: item.node
						}, item.id))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        @keyframes folder-page {
          from { opacity: 0; transform: translateX(calc(var(--step, 1) * 18px)); }
          to { opacity: 1; transform: translateX(0); }
        }
      ` })
		]
	});
}
function Cover({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-dvh max-w-5xl flex-col justify-center px-4 py-8 print:hidden sm:px-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-5 text-center font-sans text-[0.7rem] font-semibold tracking-[0.28em] text-paper/70 uppercase",
			children: "Química · Arte · História · Ensino médio"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-center gap-8 lg:grid-cols-[minmax(0,18rem)_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto w-full max-w-xs",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onOpen,
					className: "cardboard group relative block aspect-folder w-full overflow-hidden rounded-xl text-left shadow-[0_28px_60px_rgba(0,0,0,0.45)] ring-1 ring-paper/20 transition-transform duration-300 ease-[var(--ease-out)] hover:-translate-y-1",
					"aria-label": "Abrir a pasta O Verde de Scheele",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/still-life.jpg",
							alt: "",
							className: "absolute inset-0 h-full w-full object-cover opacity-80 mix-blend-multiply",
							crossOrigin: "anonymous"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-moss/90 via-moss/20 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-[0.65rem] tracking-[0.26em] text-paper/80 uppercase",
								children: "Pasta didática · 4 páginas"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 w-full whitespace-normal font-display text-2xl leading-[1.08] text-paper",
								children: [
									"O Verde",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"de Scheele"
								]
							})]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-paper",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl font-medium tracking-tight sm:text-5xl",
						children: "A cor mais cobiçada — e mais venenosa — do século XIX"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm leading-relaxed text-paper/80 sm:text-base",
						children: "Em 1775, Carl Wilhelm Scheele inventou um verde-amarelado feito de cobre e arsênio. Esta pasta de quatro páginas conta a origem da cor, as obras e os vestidos que a usaram, a fórmula CuHAsO₃, os riscos à saúde e as fontes em ABNT."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 flex flex-wrap gap-2 text-[0.7rem] font-semibold tracking-[0.14em] text-paper/70 uppercase",
						children: PAGES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "rounded-full border border-paper/20 px-3 py-1",
							children: [
								"0",
								item.id + 1,
								" ",
								item.label
							]
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onOpen,
						className: "mt-8 inline-flex min-h-11 items-center gap-2 rounded-full bg-paper px-5 text-sm font-semibold text-moss transition-transform duration-150 hover:-translate-y-0.5",
						children: ["Abrir a pasta", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
					})
				]
			})]
		})]
	});
}
function FolderChrome({ children, page, onClose, onPrint, onGo }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "cardboard rounded-xl p-2 shadow-[0_24px_50px_rgba(0,0,0,0.38)] ring-1 ring-paper/15 sm:p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print mb-2 flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "min-h-11 rounded-md bg-moss/25 px-3 text-sm font-medium text-paper hover:bg-moss/40",
						children: "Fechar pasta"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex min-w-0 flex-1 gap-1 overflow-x-auto",
						children: PAGES.map((item) => {
							const Icon = item.icon;
							const active = item.id === page;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => onGo(item.id),
								className: cn("inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-md px-3 text-sm", active ? "bg-paper text-ink" : "text-paper/90 hover:bg-moss/25"),
								"aria-current": active ? "page" : void 0,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: item.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "sm:hidden",
										children: ["0", item.id + 1]
									})
								]
							}, item.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: onPrint,
						className: "inline-flex min-h-11 items-center gap-1.5 rounded-md bg-moss/25 px-3 text-sm font-medium text-paper hover:bg-moss/40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), "Imprimir"]
					})
				]
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print mt-2 flex items-center justify-between gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onGo(page - 1),
						disabled: page === 0,
						className: "inline-flex min-h-11 items-center gap-1 rounded-md bg-moss/25 px-3 text-sm font-medium text-paper disabled:opacity-40",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), "Anterior"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs tracking-widest text-paper/80 uppercase",
						children: [
							"Página ",
							String(page + 1).padStart(2, "0"),
							" / 04"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => onGo(page + 1),
						disabled: page === PAGES.length - 1,
						className: "inline-flex min-h-11 items-center gap-1 rounded-md bg-moss/25 px-3 text-sm font-medium text-paper disabled:opacity-40",
						children: ["Próxima", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderApp, {});
}
//#endregion
export { Home as component };
