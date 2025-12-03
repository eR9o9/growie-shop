PORT:=7666

# --- Команды ---


cloudflared-tunnel: # Создать туннель для вебхука
	@echo "Creating cloudflared tunnel..."
	cloudflared tunnel --url http://localhost:$(PORT)


run: ## Run the server
	@echo "Running server..."
	npm run dev -- --port=$(PORT)

test: ## Run tests in watch mode
	@echo "Running tests..."
	npm test

test-run: ## Run tests once (CI mode)
	@echo "Running tests once..."
	npm run test:run

test-ui: ## Run tests with UI interface
	@echo "Opening test UI..."
	npm run test:ui

test-coverage: ## Run tests with coverage report
	@echo "Running tests with coverage..."
	npm run test:coverage

EXCLUDE_DIRS = .git dist node_modules target .idea .vscode

.PHONY: tree
tree:
	@bash -c '\
		ex=""; \
		for d in $(EXCLUDE_DIRS); do \
			ex="$$ex -not -path \"./$$d*\""; \
		done; \
		eval find . $$ex -print | sed -e "s;[^/]*/;|____;g;s;____|; |;g" \
	'



.PHONY: test test-run test-ui test-coverage

.PHONY: lint-fix
lint-fix:
	npm run lint -- --fix

.PHONY: lint-style
lint-style:
	npx prettier --check "src/**/*.{ts,tsx,css}" --write

.PHONY: lint
lint:
	@$(MAKE) lint-fix
	@$(MAKE) lint-style


.PHONY: build
build: ## Build the project
	@echo "Building project..."
	npm run build